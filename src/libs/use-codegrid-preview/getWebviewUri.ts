import { Uri, Webview } from 'vscode';

export const getWebviewUri = (webview: Webview, filePath: string) => {
  const uri = Uri.file(filePath);
  return webview.asWebviewUri(uri).toString();
};
