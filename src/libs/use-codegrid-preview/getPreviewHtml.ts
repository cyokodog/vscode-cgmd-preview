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
  <script src="https://www.codegrid.net/assets/generated/components/codegrid-components.min.js"></script>
  </head>
  <body>
  <main class="cmn-Main">
  <div class="cg-Article_Body astro-JWU2CTGO">
  <div class="cg-CGMarkdown svelte-xv7zxx">
  ${articleHtml}
  </div>
  </div>
  </main>
  </body>
  </html>`;
};
