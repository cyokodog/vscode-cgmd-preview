import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { getUniqueFileName } from '../getUniqueFileName';

export const fileRenameToMarkdownUpdateAsync = async ({
  range,
  altText,
  originalImagePath,
  dir,
  baseName,
  ext,
  absoluteOriginalPath,
  markdownDir,
  document,
  edit,
}: {
  range: vscode.Range;
  altText: string;
  originalImagePath: string;
  dir: string;
  baseName: string;
  ext: string;
  absoluteOriginalPath: string;
  markdownDir: string;
  document: vscode.TextDocument;
  edit: vscode.WorkspaceEdit;
}) => {
  return new Promise<null>(async (resolve, reject) => {
    const newImagePath = await getUniqueFileName(dir, baseName, ext);
    if (originalImagePath === newImagePath) {
      resolve(null);
      return;
    }
    try {
      await fs.promises.rename(absoluteOriginalPath, newImagePath);
      console.log(`Renamed image file to: ${newImagePath}`);

      const updatedLink = `![${altText}](${path.relative(
        markdownDir,
        newImagePath
      )})`;

      edit.replace(document.uri, range, updatedLink);
      await vscode.workspace.applyEdit(edit);
      await document.save();

      resolve(null);
    } catch (error) {
      console.error('Error renaming image file:', (error as Error).message);
      reject(error);
    }
  });
};
