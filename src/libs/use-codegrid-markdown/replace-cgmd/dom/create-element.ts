import { provideDocument } from './provide-document';

export const createElement = provideDocument(
  (document: Document, tagName: string): HTMLElement => {
    return document.createElement(tagName);
  },
);
