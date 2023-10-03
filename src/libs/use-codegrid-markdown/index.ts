import CodeGridMarkdown from 'codegrid-markdown';
import { JSDOM } from 'jsdom';
import { replaceCgmd } from './replace-cgmd';
import { syntaxHighlight } from './syntax-highlight';
import { provideHighlighter } from './syntax-highlight/highlighter';

export const useCodeGridMarkdown = async () => {
  const highlighter = await provideHighlighter();
  const renderer = new CodeGridMarkdown();
  return {
    toHtml(md: string) {
      const html = renderer.render(md);
      const doc = new JSDOM(html).window.document;
      return syntaxHighlight(replaceCgmd(doc), highlighter).body.innerHTML;
    },
  };
};
