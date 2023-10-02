import { ImgboxAttribute } from '../detector/detect-imgbox-attributes';
import { provideDocument } from '../dom/provide-document';

const makeImgboxElement_ = (
  document: Document,
  { src, caption, alt, aside }: ImgboxAttribute,
): HTMLElement => {
  const el = document.createElement('cg-imgbox');
  el.setAttribute('src', src);
  el.setAttribute('caption', caption);

  if (alt === '' && aside === '') {
    return el;
  }

  if (alt !== '') {
    el.setAttribute('alt', alt);
  }

  if (aside !== '') {
    el.insertAdjacentHTML('afterbegin', aside);
  }

  return el;
};

export const makeImgboxElement = provideDocument(makeImgboxElement_);
