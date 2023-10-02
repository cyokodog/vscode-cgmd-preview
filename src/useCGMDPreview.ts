import * as vscode from 'vscode';
import { useCodeGridMarkdown } from './libs/use-codegrid-markdown';
import { useCodeGridPreview } from './libs/use-codegrid-preview';

let webviewPanel = null as null | vscode.WebviewPanel;
let webviewPanelDisposed = false;

export const useCGMDPreview = () => {
  const cgMdCtx = useCodeGridMarkdown();
  const cgPreviewCtx = useCodeGridPreview();

  return {
    showPreview() {
      if (!vscode.window.activeTextEditor) {
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

      const articleHtml = cgMdCtx.toArticleHtml(
        vscode.window.activeTextEditor.document.getText() || ''
      );
      webviewPanel.webview.html = cgPreviewCtx.toPreviewHtml(articleHtml);
    },
  };
};
