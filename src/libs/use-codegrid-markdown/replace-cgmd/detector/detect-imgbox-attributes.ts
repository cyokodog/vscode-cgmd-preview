import { ReplaceCgmdDetectionError } from '../../errors/replace-cgmd-detection-error';
import { ReplaceCgmdDetectionWarning } from '../../errors/replace-cgmd-detection-warning';

export interface ImgboxAttribute {
  caption: string;
  src: string;
  alt: string;
  aside: string;
}

type Detected = [Node, ImgboxAttribute];

const jadeHeadingClassName = 'ImgBox-title';
const possiblyHeadingTagNames = ['h1', 'h2', 'h3', 'h4'];

const isElement = (node: Node): boolean => {
  return node.nodeType === 1;
};

const isText = (node: Node): node is Node & { textContent: string } => {
  return node.nodeType === 3 && node.textContent !== null;
};

const recursiveFindTextContent = (node: Node): string => {
  if (isElement(node)) {
    return Array.from(node.childNodes)
      .map((child) => recursiveFindTextContent(child))
      .join('');
  }

  if (isText(node)) {
    return node.textContent;
  }

  return '';
};

export const detectImgboxAttributes = (nodeList: NodeList): Detected[] => {
  return Array.from(nodeList).reduce((output, node) => {
    // <hn> 要素、あるいは jade 記事のタイトル要素
    const captionEl = (node as HTMLElement).querySelector<HTMLElement>(
      possiblyHeadingTagNames.concat(`.${jadeHeadingClassName}`).join(', '),
    );
    // キャプションの中に HTML 要素が含まれてる場合は警告。
    // キャプション自体は存在するのでエラーにはしない。
    if (
      captionEl &&
      Array.from(captionEl.childNodes).some((v) => v.nodeType === 1)
    ) {
      const warn = new ReplaceCgmdDetectionWarning(
        'childNodes に Element を持つ caption があります。',
        captionEl as HTMLElement,
      );
      console.warn(`${warn.name}: ${warn.message}`);
    }

    // img 要素がない、あるいは src が存在しない場合は、
    // imgbox が成り立たないのでエラー。
    const imgEl = (node as HTMLElement).querySelector<HTMLElement>('img');
    if (imgEl === null) {
      throw new ReplaceCgmdDetectionError(
        'img 要素が存在しない imgbox があります。',
        node,
      );
    }

    const src = imgEl.getAttribute('src');
    if (src === null) {
      throw new ReplaceCgmdDetectionError(
        'img に src 属性が存在しない imgbox があります。',
        node,
      );
    }

    // 補足説明の要素を特定する識別子が付与されていないので、
    // <hn> を除外した残りの要素を、補足説明の要素とする。
    // ただしこの中には、上記 imgEl を含む要素も含まれている。
    // 後述する理由により、 imgEl を補足から除去する処理は別途行う。
    const asideEls = Array.from(node.childNodes).filter((child) => {
      // md パーサーによって何らかの HTML 要素に変換されているはずなので
      if (child.nodeType !== 1) {
        return false;
      }

      // <hn> 要素を除外する
      if (possiblyHeadingTagNames.includes(child.nodeName.toLowerCase())) {
        return false;
      }

      // jade記事の場合、 <hn> ではない場合があるのでそれも除外する
      if ((child as HTMLElement).classList.contains(jadeHeadingClassName)) {
        return false;
      }

      return true;
    }) as HTMLElement[];

    const caption = captionEl ? recursiveFindTextContent(captionEl) : '';
    const alt = imgEl.getAttribute('alt') || '';

    // Markdownの記述の仕方によっては、補足部分を含む要素が、
    //
    //   <p><img src="..."></p>
    //   <p>補足テキスト</p>
    //
    // のようになる場合と、
    //
    //   <p><img src="...">補足テキスト</p>
    //
    // のようになる場合がある（空行の入れ方によってパース後の結果が変わる）
    // この2パターンの要素がどちらも、
    //
    //   <p>補足テキスト</p>
    //
    // となるように変換する。
    const aside = asideEls
      .map((el) => {
        // imgEl を持ってたら問答無用で削除し、
        if (el.contains(imgEl)) {
          el.removeChild(imgEl);
        }

        // その結果、空の <p> となるケースがあるので、
        // そうなったら <p> も消す。
        if (el.textContent === '') {
          return '';
        }

        return el.outerHTML;
      })
      .join('');

    return output.concat([
      [
        node,
        {
          src,
          caption,
          alt,
          aside,
        },
      ],
    ]);
  }, [] as Detected[]);
};
