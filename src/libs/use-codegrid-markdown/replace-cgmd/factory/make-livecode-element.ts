import { LivecodeAttribute } from '../detector/detect-livecode-attributes';
import { provideDocument } from '../dom/provide-document';

const makeLivecodeElement_ = (
  document: Document,
  { src, title, file, isDeferred }: LivecodeAttribute,
): HTMLElement => {
  const el = document.createElement('cg-livecode');
  el.setAttribute('src', src);
  el.setAttribute('title', title);
  el.setAttribute('file', file);

  if (isDeferred) {
    el.setAttribute('deferred', 'deferred');
  }

  return el;
};

export const makeLivecodeElement = provideDocument(makeLivecodeElement_);
