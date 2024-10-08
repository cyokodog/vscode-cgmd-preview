import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { fileMoveToMarkdownUpdateAsync } from './fileMoveToMarkdownUpdateAsync';

const IMAGE_LINK_REGEX = /\!\[(.*?)\]\((.*?)\)/g;

export const imageFileMove = async (
  document: vscode.TextDocument
): Promise<void> => {
  const markdownDir = path.dirname(document.fileName);
  const assetsDir = path.join(markdownDir, 'assets', 'img');

  if (!fs.existsSync(assetsDir)) {
    await fs.promises.mkdir(assetsDir, { recursive: true });
  }

  const text = document.getText();
  let match: RegExpExecArray | null;

  const edit = new vscode.WorkspaceEdit();

  const nameChangePromises = [] as Promise<null>[];

  while ((match = IMAGE_LINK_REGEX.exec(text)) !== null) {
    const startPos = document.positionAt(match.index);
    const endPos = document.positionAt(match.index + match[0].length);
    const range = new vscode.Range(startPos, endPos);
    const altText = match[1];
    const imagePath = match[2];

    const absoluteImagePath = path.resolve(markdownDir, imagePath);
    const newImagePath = path.join(assetsDir, path.basename(imagePath));

    const imageLinkMarkdown = `![${altText}](${path.relative(
      markdownDir,
      newImagePath
    )})`;

    if (
      fs.existsSync(newImagePath) === false &&
      fs.existsSync(absoluteImagePath)
    ) {
      nameChangePromises.push(
        fileMoveToMarkdownUpdateAsync({
          range,
          absoluteImagePath,
          newImagePath,
          imageLinkMarkdown,
          document,
          edit,
        })
      );
    }
  }
  await Promise.all(nameChangePromises);
};
