const { app, BrowserWindow } = require('electron');

function createWindow () {
  win = new BrowserWindow({
    show: false,
    titleBarStyle: 'hidden',
    width: 200, 
    height: 300,
    backgroundColor: '#991f23' 
  });

  win.loadFile('src/index.html');
  win.once('ready-to-show', () => {
    win.show();
  })
}

app.on('ready', createWindow);