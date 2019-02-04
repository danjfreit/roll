const { ipcRenderer } = require('electron');


var btnEl = document.querySelector('.roll-btn');
var btnTextEl = btnEl.querySelector('.roll-btn-text');

btnEl.addEventListener('click', () => {
    ipcRenderer.send('roll-message');
})

ipcRenderer.on('roll-reply', (event, result) => {
    btnTextEl.textContent = result;
});
