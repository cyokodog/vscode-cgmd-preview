import CodeGridMarkdown from 'codegrid-markdown';
import { JSDOM } from 'jsdom';
import { replaceCgmd } from './replace-cgmd';

export const useCodeGridMarkdown = () => {
  const renderer = new CodeGridMarkdown();
  return {
    toHtml(md: string) {
      const html = renderer.render(md);
      const doc = new JSDOM(html).window.document;
      return replaceCgmd(doc).body.innerHTML;
    },
  };
};
