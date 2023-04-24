const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('greeting', {
    node: () => process.versions.node,
    ping: () => ipcRenderer.invoke('ping'),
})