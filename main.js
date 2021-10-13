const electron = require("electron");
const ffmpeg = require("fluent-ffmpeg");

const { app, BrowserWindow, ipcMain } = electron;
let mainWindow;

// listen to the app to be ready
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on("video:duration:request", (event, path) => {
  ffmpeg.ffprobe(path, (error, metadata) => {
    console.log("Video duration is", metadata.format.duration);
    mainWindow.webContents.send(
      "video:duration:send",
      metadata.format.duration
    );
  });
});
