const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, dialog } = electron;
let mainWindow;

// listen for app to be ready
app.on('ready', function () {

    //create new window
    mainWindow = new BrowserWindow({});

    // load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    // Insert menu

    Menu.setApplicationMenu(mainMenu);
});

// Create menu template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Add New Language File'
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
        label: 'Operation',
        submenu: [
            {
                label: 'Check Missing Translations',
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

