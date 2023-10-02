import path from 'path';
import { Uri, Webview } from 'vscode';
import { getPreviewHtml } from './getPreviewHtml';
import { JSDOM } from 'jsdom';

export const useCodeGridPreview = () => {
  return {
    toWebviewHtml({
      html,
      webview,
      basePath,
    }: {
      html: string;
      webview: Webview;
      basePath: string;
    }) {
      const doc = new JSDOM(html).window.document;
      doc.querySelectorAll('img').forEach((img) => {
        if (img.src.startsWith('.')) {
          const uri = Uri.file(path.join(basePath, img.src));
          const src = webview.asWebviewUri(uri);
          img.setAttribute('src', src.toString());
        }
      });
      return getPreviewHtml(doc.body.innerHTML);
    },
  };
};
