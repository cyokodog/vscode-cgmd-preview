import path from 'path';
import { Webview } from 'vscode';
import { getWebviewUri } from './getWebviewUri';

export const getPreviewHtml = ({
  articleHtml,
  webview,
  extensionPath,
}: {
  articleHtml: string;
  webview: Webview;
  extensionPath: string;
}) => {
  const cgComponentSrc = getWebviewUri(
    webview,
    path.join(extensionPath, 'assets', 'scripts', 'codegrid-components.min.js')
  );
  const cgStylesSrc = getWebviewUri(
    webview,
    path.join(extensionPath, 'assets', 'styles', 'codegrid-styles.css')
  );

  return /* html */ `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#000" />
  <link rel="stylesheet" href="${cgStylesSrc}" />
  <script src="${cgComponentSrc}">
  </script>
  </head>
  <body>
  <main class="cmn-Main">
  <div class="cg-Article_Body">
  <div class="cg-CGMarkdown">
  ${articleHtml}
  </div>
  </div>
  </main>
  </body>
  </html>`;
};
