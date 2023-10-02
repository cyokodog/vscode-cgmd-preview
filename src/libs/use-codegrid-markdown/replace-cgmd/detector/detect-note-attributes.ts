import { createElement } from '../dom/create-element';

export interface NoteAttribute {
  title: string;
  content: string;
}

type Detected = [Node, NoteAttribute];
const titleSelectors = '.Note-title, h1, h2, h3, h4, h5, h6';

const absorbContentEl = (
  node: Node,
  titleEl: HTMLElement | null,
): HTMLElement => {
  const jadeBody = (node as HTMLElement).querySelector<HTMLElement>(
    '.Note-body',
  );
  if (jadeBody !== null) {
    return jadeBody;
  }

  /**
   * md の記事の場合 content を取得するための識別子がないので、
   * titleEl 以外を contentEl として扱う。
   */
  const contentEl = createElement('div');
  Array.from(node.childNodes)
    .filter((child) => titleEl === null || !child.isSameNode(titleEl))
    .forEach((child) => contentEl.appendChild(child));
  return contentEl;
};

export const detectNoteAttributes = (nodeList: NodeList): Detected[] => {
  return Array.from(nodeList).reduce((output, node) => {
    const titleEl = (node as HTMLElement).querySelector<HTMLElement>(
      titleSelectors,
    );

    const title = titleEl ? titleEl.innerHTML : '';
    const content = absorbContentEl(node, titleEl).innerHTML;

    return output.concat([
      [
        node,
        {
          title,
          content,
        },
      ],
    ]);
  }, [] as Detected[]);
};
