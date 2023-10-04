import path from 'path';
import { Webview } from 'vscode';
import { getPreviewHtml } from './getPreviewHtml';
import { JSDOM } from 'jsdom';
import { getWebviewUri } from './getWebviewUri';

export const useCodeGridPreview = () => {
  return {
    toWebviewHtml({
      html,
      webview,
      basePath,
      extensionPath,
    }: {
      html: string;
      webview: Webview;
      basePath: string;
      extensionPath: string;
    }) {
      const doc = new JSDOM(html).window.document;
      [
        ...doc.querySelectorAll('img'),
        ...doc.querySelectorAll('cg-imgbox'),
      ].forEach((el: any) => {
        const src = el.getAttribute('src');
        if (/^https?\:\/\//.test(src) === false) {
          el.setAttribute(
            'src',
            getWebviewUri(webview, path.join(basePath, src))
          );
        }
      });
      const articleHtml = doc.body.innerHTML;
      return getPreviewHtml({ articleHtml, webview, extensionPath });
    },
  };
};
