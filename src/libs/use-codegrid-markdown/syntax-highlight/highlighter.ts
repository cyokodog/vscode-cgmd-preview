import { getHighlighter, renderToHtml } from 'shiki';

export type Highlighter = {
  highlight: (code: string, lang: string) => string;
  languages: Record<string, true>;
};

export const provideHighlighter = async (): Promise<Highlighter> => {
  const highlighter = await getHighlighter({ theme: 'github-light' });
  const languages = highlighter
    .getLoadedLanguages()
    .reduce((acc: Record<string, true>, lang) => {
      acc[lang] = true;
      return acc;
    }, {});

  return {
    highlight: (code: string, lang: string) => {
      const tokens = highlighter.codeToThemedTokens(code, lang);
      return renderToHtml(tokens, {
        elements: {
          pre({ children }) {
            return children;
          },
          code({ children }) {
            return children;
          },
        },
      });
    },
    languages,
  };
};
