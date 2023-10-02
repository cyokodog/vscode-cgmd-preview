import { ColumnAttribute } from '../detector/detect-column-attributes';
import { provideDocument } from '../dom/provide-document';

const makeColumnElement_ = (
  document: Document,
  { title, content }: ColumnAttribute,
): HTMLElement => {
  const el = document.createElement('cg-column');
  el.insertAdjacentHTML(
    'afterbegin',
    `
    <h3>${title}</h3>
    ${content}
  `,
  );

  return el;
};

export const makeColumnElement = provideDocument(makeColumnElement_);
