import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "vscode-cgmd-preview" is now active!'
  );

  let webviewPanel = null as null | vscode.WebviewPanel;
  let webviewPanelDisposed = false;

  const showPreview = () => {
    if (vscode.window.activeTextEditor) {
      if (!webviewPanel || webviewPanelDisposed) {
        webviewPanel = vscode.window.createWebviewPanel(
          'preview',
          'preview',
          vscode.ViewColumn.Two,
          {
            enableScripts: true,
          }
        );
        webviewPanelDisposed = false;
      }

      webviewPanel.onDidDispose(() => {
        webviewPanelDisposed = true;
      });

      webviewPanel.webview.html = `<!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#000" />
      </head>
      <body>hello${new Date().getMilliseconds()}</body>
      </html>
      `;
    }
  };

  showPreview();

  const saveDisposable = vscode.workspace.onDidSaveTextDocument((event) => {
    showPreview();
  });

  const cmdDisposable = vscode.commands.registerCommand(
    'vscode-cgmd-preview.preview',
    () => {
      vscode.window.showInformationMessage('run vscode-cgmd-preview!');
    }
  );
  context.subscriptions.push(cmdDisposable, saveDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

/*
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-cgmd-preview" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscode-cgmd-preview.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from vscode-cgmd-preview!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
*/
