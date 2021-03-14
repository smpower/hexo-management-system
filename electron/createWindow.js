const { BrowserWindow } = require("electron");

const { NODE_ENV } = process.env;

module.exports = () => {
  const win = new BrowserWindow({
    width: 1320,
    height: 850,
    title: "Hexo Management System",
    frame: false,
    titleBarStyle: "hiddenInset",
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (NODE_ENV === "development") win.loadURL("http://localhost:3000");
  else win.loadFile("build/index.html");
};
