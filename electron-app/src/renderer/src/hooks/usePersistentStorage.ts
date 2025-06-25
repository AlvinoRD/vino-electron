// @ts-ignore Exposed in preload
const fs = window.fs

const DATA_FILEPATH = './.persistent-storage.json'

abstract class PersistentStorage {
  abstract getItem(key: string): any | null
  abstract setItem(key: string, value: string): void
}

export class FileBasedPersistentStorage extends PersistentStorage {
  private data: Record<string, string> = {}

  constructor(private filename: string) {
    super()
    try {
      const contents = fs.readFileSync(filename, 'utf-8')
      this.data = JSON.parse(contents)
    } catch (err: any) {
      if (err.code !== 'ENOENT') {
        throw err
      }
    }
  }

  private save() {
    fs.writeFileSync(this.filename, JSON.stringify(this.data))
  }

  getItem(key: string): any {
    return this.data[key] ?? null
  }

  setItem(key: string, value: any) {
    this.data[key] = value
    this.save()
  }
}

const storage = new FileBasedPersistentStorage(DATA_FILEPATH)

const usePersistentStorage = () => {
  const getItem = (key: string) => storage.getItem(key)
  const setItem = (key: string, value: any) => storage.setItem(key, value)

  return { getItem, setItem }
}

export default usePersistentStorage
