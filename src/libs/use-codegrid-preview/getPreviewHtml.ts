import { getScripts } from './getScripts';
import { getStyles } from './getStyles';

export const getPreviewHtml = (articleHtml: string) => {
  return /* html */ `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#000" />
  <style>
    ${getStyles()}  
  </style>
  <script>
    ${getScripts()}
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
