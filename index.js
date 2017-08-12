var app = require('app')
var electron = require('electron')
var BrowserWindow = electron.BrowserWindow

var appHtml = 'file://' + __dirname + '/apps/apps.html'

require('crash_reporter').start()

var mainWindow = null

app.on('window-all-closed', function() {
  // for Mac
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('ready', function() {
  mainWindow = new BrowserWindow({width : 800, height : 600})
  mainWindow.loadUrl(currentUrl)
  mainWindow.toggleDevTools()

  mainWindow.on('closed', function() {
    mainWindow = null
  })
})
