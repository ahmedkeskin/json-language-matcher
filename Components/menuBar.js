const electron = require('electron');
const { app, dialog } = electron;

//** Menu Bar */
var menu = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Create New File'
            },
            {
                label: 'Import New File'
            },
            {
                label: 'Open Folder'
            },
            {
                label: 'Quit',
                click() {
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'Operations',
        submenu: [
            {
                label: 'Check missing Translations',
                click() {
                    dialog.showMessageBoxSync({
                        title: 'Information',
                        message: 'There is no missing translation'
                    });
                }
            }
        ]

    }
]
exports.MainMenu = menu;
