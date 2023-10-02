import * as vscode from 'vscode';
import { useCGMDPreview } from './useCgmdPreview';

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "vscode-cgmd-preview" is now active!'
  );

  const CGMD = useCGMDPreview();

  // mdファイル保存時にプレビューを表示する
  const saveDisposable = vscode.workspace.onDidSaveTextDocument((event) => {
    CGMD.showPreview();
  });

  // コマンドパレットから実行時にプレビューを表示する
  const cmdDisposable = vscode.commands.registerCommand(
    'vscode-cgmd-preview.preview',
    () => {
      CGMD.showPreview();
    }
  );
  context.subscriptions.push(cmdDisposable, saveDisposable);

  CGMD.showPreview();
}

export function deactivate() {}
