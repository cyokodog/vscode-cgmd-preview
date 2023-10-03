import { Highlighter } from './highlighter';

const languageDetectRe = new RegExp(/\blang(?:uage)?-([\w-]+)\b/i);

export const syntaxHighlight = (
  document: Document,
  { highlight, languages }: Highlighter,
): Document => {
  console.log('--- Start to process syntax highlight.');
  const cloned = document.cloneNode(true) as Document;
  const blocks = cloned.querySelectorAll<HTMLElement>('cg-code-block pre code');

  for (const block of blocks) {
    // should not be happened
    if (block.textContent === null) continue;

    const match = languageDetectRe.exec(block.getAttribute('class') || '');
    const lang =
      match !== null && languages[match[1]] !== undefined ? match[1] : 'text';

    block.innerHTML = highlight(block.textContent, lang);
  }

  return cloned;
};
