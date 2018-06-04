const vscode = require('vscode');

function activate(context) {

  // console.log('Congratulations, your extension "vscode-touchbar" is now active!');

  const commands = [{
      'name': 'extension.toggleLineComment',
      'command': 'editor.action.commentLine'
    },
    {
      'name': 'extension.beautifySelection',
      'command': 'HookyQR.beautify'
    },
    {
      'name': 'extension.sortLines',
      'command': 'editor.action.sortLinesAscending'
    },
    {
      'name': 'extension.jumpToLine',
      'command': 'workbench.action.gotoLine',
    },
    {
      'name': 'extension.terminal',
      'command': 'workbench.action.terminal.toggleTerminal'
    }
  ]
  commands.forEach(value => {
    let disposable = vscode.commands.registerCommand(value.name, function () {
      vscode.commands.executeCommand(value.command)
    });
    context.subscriptions.push(disposable);
  })
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;