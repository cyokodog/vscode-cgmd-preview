import * as vscode from 'vscode';

import path from 'path';
import { useCodeGridMarkdown } from './libs/use-codegrid-markdown';
import { useCodeGridPreview } from './libs/use-codegrid-preview';

let webviewPanel = null as null | vscode.WebviewPanel;
let webviewPanelDisposed = false;

export const useCGMDPreview = (_context: vscode.ExtensionContext) => {
  //_context.extensionUri: 拡張機能のベースパスが得られる

  const markdownCtx = useCodeGridMarkdown();
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
          'preview',
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
      const md = activeTextEditor.document.getText() || '';
      const html = markdownCtx.toHtml(md);
      const webviewHtml = previewCtx.toWebviewHtml({ html, webview, basePath });
      webviewPanel.webview.html = webviewHtml;
    },
  };
};
