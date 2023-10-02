import { detectCodeAttributes } from './detector/detect-code-attributes';
import { detectColumnAttributes } from './detector/detect-column-attributes';
import { detectImgboxAttributes } from './detector/detect-imgbox-attributes';
import { detectLivecodeAttributes } from './detector/detect-livecode-attributes';
import { detectNoteAttributes } from './detector/detect-note-attributes';
import { makeCodeElement } from './factory/make-code-element';
import { makeColumnElement } from './factory/make-column-element';
import { makeImgboxElement } from './factory/make-imgbox-element';
import { makeLivecodeElement } from './factory/make-livecode-element';
import { makeNoteElement } from './factory/make-note-element';

/**
 * CodeGridMarkdown が変換した、 CodeGrid 独自のマークアップを、
 * @codegrid/components のコンポーネントで置き換える。
 */
export const replaceCgmd = (document: Document): Document => {
  console.log('--- Start to replace CGMD.');
  const cloned = document.cloneNode(true) as Document;
  detectLivecodeAttributes(
    cloned.querySelectorAll<HTMLElement>('.CG2-livecode'),
  ).forEach(([node, attribute]) => {
    (node.parentNode as Node).replaceChild(
      makeLivecodeElement(attribute),
      node,
    );
  });
  detectColumnAttributes(
    cloned.querySelectorAll<HTMLElement>('.Column'),
  ).forEach(([node, attribute]) => {
    (node.parentNode as Node).replaceChild(makeColumnElement(attribute), node);
  });
  detectNoteAttributes(cloned.querySelectorAll<HTMLElement>('.Note')).forEach(
    ([node, attribute]) => {
      (node.parentNode as Node).replaceChild(makeNoteElement(attribute), node);
    },
  );
  detectImgboxAttributes(
    cloned.querySelectorAll<HTMLElement>('.ImgBox'),
  ).forEach(([node, attribute]) => {
    (node.parentNode as Node).replaceChild(makeImgboxElement(attribute), node);
  });
  detectCodeAttributes(
    cloned.querySelectorAll<HTMLElement>('.CG2-livecode, pre'),
  ).forEach(([node, attribute]) => {
    (node.parentNode as Node).replaceChild(makeCodeElement(attribute), node);
  });

  return cloned;
};
