import * as vscode from 'vscode';

export const wrapImagesInImgbox = async (document: vscode.TextDocument) => {
  const text = document.getText();
  const imageLinkRegex = /\!\[(.*?)\]\((.*?)\)/g; // altテキストを含む画像リンクをキャプチャ
  let match: RegExpExecArray | null;

  const edit = new vscode.WorkspaceEdit();
  const replacements: { range: vscode.Range; content: string }[] = [];

  while ((match = imageLinkRegex.exec(text)) !== null) {
    const startPos = document.positionAt(match.index);
    const endPos = document.positionAt(match.index + match[0].length);

    const fullLineRange = document.lineAt(startPos).rangeIncludingLineBreak;
    const fullText = document.getText(fullLineRange);

    const surroundingTextAfter = document.getText(
      new vscode.Range(endPos.line + 1, 0, endPos.line + 1, 9)
    );

    if (
      !fullText.includes('[imgbox]') &&
      !surroundingTextAfter.includes('[/imgbox]')
    ) {
      const altText = match[1];
      const imagePath = match[2];
      const updatedLink = `![${altText}](${imagePath})`;
      const imgboxContent = `[imgbox]\n### ${altText}\n${updatedLink}\n[/imgbox]`;

      replacements.push({
        range: new vscode.Range(startPos, endPos),
        content: imgboxContent,
      });
    }
  }

  for (const replacement of replacements) {
    edit.replace(document.uri, replacement.range, replacement.content);
  }

  await vscode.workspace.applyEdit(edit);
  await document.save();
};
