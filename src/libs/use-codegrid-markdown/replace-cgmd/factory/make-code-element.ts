import { CodeAttribute } from '../detector/detect-code-attributes';
import { provideDocument } from '../dom/provide-document';

const makeCodeElement_ = (
  document: Document,
  { label, code }: CodeAttribute,
): HTMLElement => {
  const el = document.createElement('cg-code-block');

  if (label !== '') {
    el.insertAdjacentHTML('afterbegin', `<h3>${label}</h3>`);
  }

  el.insertAdjacentHTML('beforeend', `${code}`);

  return el;
};

export const makeCodeElement = provideDocument(makeCodeElement_);
