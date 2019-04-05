const { ipcRenderer } = require("electron");

var btnEl = document.querySelector(".roll-btn");
var btnTextEl = btnEl.firstElementChild;

btnEl.addEventListener("click", () => {
  ipcRenderer.send("roll-message");
});

ipcRenderer.on("roll-reply", (event, result) => {
  btnTextEl.textContent = result;
});
