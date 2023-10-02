import { JSDOM } from 'jsdom';

export const provideDocument = <T>(
  fn: (document: Document, ...args: any[]) => T,
): ((...args: any[]) => T) => {
  const dom = new JSDOM('', { runScripts: 'outside-only' });
  return (...args: any[]): T => {
    return fn(dom.window.document, ...args);
  };
};
