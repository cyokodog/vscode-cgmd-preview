import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { fileRenameToMarkdownUpdateAsync } from './fileRenameToMarkdownUpdateAsyn';

const IMAGE_LINK_WITH_RENAME_REGEX = /\!\[(.*?)\]\((.*?)\|(.*?)\)/g;

export const imageFileRename = async (
  document: vscode.TextDocument
): Promise<void> => {
  const markdownDir = path.dirname(document.fileName);
  const text = document.getText();

  let match: RegExpExecArray | null;
  const edit = new vscode.WorkspaceEdit();
  const nameChangePromises = [] as Promise<null>[];

  while ((match = IMAGE_LINK_WITH_RENAME_REGEX.exec(text)) !== null) {
    const startPos = document.positionAt(match.index);
    const endPos = document.positionAt(match.index + match[0].length);
    const range = new vscode.Range(startPos, endPos);
    const altText = match[1];
    const originalImagePath = match[2];
    const newFileName = match[3];

    const absoluteOriginalPath = path.resolve(markdownDir, originalImagePath);
    const dir = path.dirname(absoluteOriginalPath);
    const baseName = path.parse(newFileName).name;
    const ext = path.parse(newFileName).ext || path.extname(originalImagePath);

    if (fs.existsSync(absoluteOriginalPath)) {
      nameChangePromises.push(
        fileRenameToMarkdownUpdateAsync({
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
        })
      );
    }
  }
  await Promise.all(nameChangePromises);
};
