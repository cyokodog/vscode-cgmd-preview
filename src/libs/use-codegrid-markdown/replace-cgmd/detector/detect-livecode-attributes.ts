import { ReplaceCgmdDetectionError } from '../../errors/replace-cgmd-detection-error';

export interface LivecodeAttribute {
  title: string;
  src: string;
  file: string;
  isDeferred: boolean;
}

type Detected = [Node, LivecodeAttribute];

const isCode = (node: Node): boolean => {
  return (node as HTMLElement).querySelector<HTMLElement>('pre') !== null;
};

export const detectLivecodeAttributes = (nodeList: NodeList): Detected[] => {
  return Array.from(nodeList).reduce((output, node) => {
    /**
     * CGMD 記法の見出し付きコードブロックと、デモの class がどちらも .CG2-livecode なので、
     * コードブロックと判定された場合は無視する。
     */
    if (isCode(node)) {
      return output;
    }

    const titleEl = (node as HTMLElement).querySelector<HTMLElement>(
      '.CG2-livecode__label',
    );
    /**
     * ソースコードへのリンクを識別するための情報が付与されないので、
     * やむを得ず内包テキストで判別している。
     */
    const anchorEl = Array.from(
      (node as HTMLElement).querySelectorAll<HTMLAnchorElement>('a'),
    ).find((el) => {
      return el.innerHTML === 'ソースコード';
    });
    const contentEl = (node as HTMLElement).querySelector<HTMLIFrameElement>(
      'iframe',
    );

    if (contentEl === null) {
      throw new ReplaceCgmdDetectionError(
        'iframe が取得できない livecode があります。',
        node,
      );
    }

    /**
     * deferred が指定されてる場合、コンテンツが読み込まれるのを防ぐため、 src が空になっている。
     * src に渡されるべき内容は、 data-src に記述されているので、それを取得する。
     */
    const src =
      contentEl.getAttribute('src') || contentEl.getAttribute('data-src');
    if (src === null) {
      throw new ReplaceCgmdDetectionError(
        'iframe の src あるいは data-src 属性が取得できない livecode があります。',
        node,
      );
    }

    const title = titleEl !== null ? titleEl.textContent || '' : '';
    const file = anchorEl !== undefined ? anchorEl.href : '';
    const isDeferred = contentEl.getAttribute('data-deferred') !== null;

    return output.concat([
      [
        node,
        {
          title,
          src,
          file,
          isDeferred,
        },
      ],
    ]);
  }, [] as Detected[]);
};
