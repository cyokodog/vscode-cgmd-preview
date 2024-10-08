import * as vscode from 'vscode';

import path from 'path';
import { useCodeGridMarkdown } from './libs/use-codegrid-markdown';
import { useCodeGridPreview } from './libs/use-codegrid-preview';
import { wrapImagesInImgbox } from './utils/wrapImagesInImgbox';
import { imageFileRename } from './utils/imageFileRename';
import { imageFileMove } from './utils/imageFileMove';

let webviewPanel = null as null | vscode.WebviewPanel;
let webviewPanelDisposed = false;

export const useCGMDPreview = async (context: vscode.ExtensionContext) => {
  const markdownCtx = await useCodeGridMarkdown();
  const previewCtx = useCodeGridPreview();
  return {
    showPreview() {
      const { activeTextEditor } = vscode.window;
      if (
        !activeTextEditor ||
        path.extname(activeTextEditor.document.fileName) !== '.md'
      ) {
        return;
      }

      if (!webviewPanel || webviewPanelDisposed) {
        webviewPanel = vscode.window.createWebviewPanel(
          'preview',
          'CGMD Preview',
          vscode.ViewColumn.Two,
          {
            enableScripts: true,
          }
        );
        webviewPanelDisposed = false;
        webviewPanel.onDidDispose(() => {
          webviewPanelDisposed = true;
        });
      }
      const { webview } = webviewPanel;
      const basePath = path.dirname(activeTextEditor.document.fileName || '');
      const { extensionPath } = context;
      const md = activeTextEditor.document.getText() || '';
      const html = markdownCtx.toHtml(md);
      const webviewHtml = previewCtx.toWebviewHtml({
        html,
        webview,
        basePath,
        extensionPath,
      });
      webviewPanel.webview.html = webviewHtml;
    },

    async imageFileJustifyAsync(document: vscode.TextDocument) {
      await wrapImagesInImgbox(document);
      await imageFileRename(document);
      await imageFileMove(document);
    },
  };
};
