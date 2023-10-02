import { NoteAttribute } from '../detector/detect-note-attributes';
import { provideDocument } from '../dom/provide-document';

const makeNoteElement_ = (
  document: Document,
  { title, content }: NoteAttribute,
): HTMLElement => {
  const el = document.createElement('cg-note');
  el.insertAdjacentHTML(
    'afterbegin',
    `
    <h3>${title}</h3>
    ${content}
  `,
  );

  return el;
};

export const makeNoteElement = provideDocument(makeNoteElement_);
