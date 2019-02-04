const colors = require('colors');
const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow () {
  win = new BrowserWindow({
    show: false,
    titleBarStyle: 'hidden',
    width: 200, 
    height: 300,
    resizable: false,
    backgroundColor: '#991f23' 
  });

  win.loadFile('src/index.html');
  win.once('ready-to-show', () => {
    win.show();
  })
}
app.on('ready', createWindow);


ipcMain.on('roll-message', event => {
  let result = Roll();
  event.sender.send('roll-reply', result);
})

function Roll() {
  return Math.floor(Math.random() * 6) + 1;
}

ipcMain.on('debug-message', (event, message) => {
  console.log(message);
})