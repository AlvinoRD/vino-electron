import fs from 'fs'
import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import Server from '../common/types/server'
import { DEFAULT_SERVER_CONFIG } from '../common/constants'

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api

  // @ts-ignore Expose Server to window
  window.server = new Server(DEFAULT_SERVER_CONFIG)

  // @ts-ignore Expose fs to window
  window.fs = fs

  // @ts-ignore Expose cwd to window
  window.cwd = process.cwd
}
