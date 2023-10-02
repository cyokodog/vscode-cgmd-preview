import { JSDOM } from 'jsdom';
import CodeGridMarkdown from 'codegrid-markdown';

export interface CodeAttribute {
  label: string;
  code: string;
}

type Detected = [Node, CodeAttribute];

const renderer = new CodeGridMarkdown();

const isFromJade = (el: HTMLElement): boolean => {
  return el.classList.contains('code');
};

const isFromCgmdSyntax = (el: HTMLElement): boolean => {
  return (el.parentNode as HTMLElement).classList.contains(
    'CG2-livecode__body',
  );
};

const codeFence = '```';

const jadeToHtml = (el: HTMLElement): string => {
  const fileType = Array.from(el.classList).find((v) => v !== 'code');
  return renderer.render(`
${codeFence}${fileType}
${el.innerHTML.trim()}
${codeFence}
  `);
};

const toElements = (html: string): HTMLElement => {
  const dom = new JSDOM(html);
  return dom.window.document.body.firstElementChild as HTMLElement;
};

const isLivecode = (node: Node): boolean => {
  return (node as HTMLElement).querySelector<HTMLElement>('iframe') !== null;
};

export const detectCodeAttributes = (nodeList: NodeList): Detected[] => {
  return Array.from(nodeList).reduce((output, node) => {
    /**
     * CGMD 記法の見出し付きコードブロックと、デモの class がどちらも .CG2-livecode なので、
     * デモと判定された場合は無視する。
     */
    if (isLivecode(node)) {
      return output;
    }

    if (node.nodeName === 'PRE') {
      if (isFromCgmdSyntax(node as HTMLElement)) {
        return output;
      }

      const absorbedElement = isFromJade(node as HTMLElement)
        ? toElements(jadeToHtml(node as HTMLElement))
        : (node as HTMLElement);

      return output.concat([
        [
          node,
          {
            label: '',
            code: absorbedElement.outerHTML,
          },
        ],
      ]);
    }

    const labelEl = (node as HTMLElement).querySelector<HTMLElement>(
      '.CG2-livecode__label',
    );
    const codeEl = (node as HTMLElement).querySelector<HTMLElement>('pre');

    const label = labelEl ? labelEl.textContent || '' : '';
    const code = codeEl ? codeEl.outerHTML : '';

    return output.concat([
      [
        node,
        {
          label,
          code,
        },
      ],
    ]);
  }, [] as Detected[]);
};
