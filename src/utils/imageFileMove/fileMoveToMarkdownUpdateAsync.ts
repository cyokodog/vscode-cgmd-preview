import * as fs from 'fs';
import * as vscode from 'vscode';

export const fileMoveToMarkdownUpdateAsync = async ({
  range,
  absoluteImagePath,
  newImagePath,
  imageLinkMarkdown,
  document,
  edit,
}: {
  range: vscode.Range;
  absoluteImagePath: string;
  newImagePath: string;
  imageLinkMarkdown: string;
  document: vscode.TextDocument;
  edit: vscode.WorkspaceEdit;
}) => {
  return new Promise<null>(async (resolve, reject) => {
    try {
      await fs.promises.rename(absoluteImagePath, newImagePath);
      console.log(`Moved image to: ${newImagePath}`);

      edit.replace(document.uri, range, imageLinkMarkdown);

      await vscode.workspace.applyEdit(edit);
      await document.save();
      resolve(null);
    } catch (error) {
      console.error('Error moving image:', (error as Error).message);
      reject(error);
    }
  });
};
