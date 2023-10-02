import CodeGridMarkdown from 'codegrid-markdown';
// import matter from 'gray-matter';
import { JSDOM } from 'jsdom';
import { replaceCgmd } from './replace-cgmd';

export const useCodeGridMarkdown = () => {
  const renderer = new CodeGridMarkdown();
  return {
    toArticleHtml(md: string) {
      // const { data: _, content } = matter(md);

      const html = renderer.render(md);
      const doc = new JSDOM(html).window.document;
      const codeGridDoc = replaceCgmd(doc);
      return codeGridDoc.body.innerHTML;
    },
  };
};
