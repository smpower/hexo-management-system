const { app, BrowserWindow, Menu } = require("electron");
const aboutPanelOptions = require("./aboutPanelOptions");
const createWindow = require("./createWindow");
const { isMac, template } = require("./template");

const menu = Menu.buildFromTemplate(template(app));
Menu.setApplicationMenu(menu);

app.setAboutPanelOptions(aboutPanelOptions);

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (!isMac) app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
