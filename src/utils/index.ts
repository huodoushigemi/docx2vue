export * from './transformInterpolation'
import { Future } from './future'

export async function getFiles(items?: DataTransferItemList) {
  const entries = Array.from(items || [])
    .map(e => e.webkitGetAsEntry()!)
    .filter(e => e != null)
    .flat()
  return await scanFiles(entries)
}

export async function scanFiles(entries: FileSystemEntry[], files: File[] = []) {
  for (const entry of entries) {
    if (entry.isDirectory) {
      const directoryReader = (entry as FileSystemDirectoryEntry).createReader()
      const future = Future()
      directoryReader.readEntries(es => scanFiles(es, files).then(future.resolve))
      await future
    } else {
      const future = Future()
      ;(entry as FileSystemFileEntry).file(file => {
        const path = entry.fullPath.substring(1)
        /**修改webkitRelativePath 是核心操作，原因是拖拽会的事件体中webkitRelativePath是空的，而且webkitRelativePath 是只读属性，普通赋值是不行的。所以目前只能使用这种方法将entry.fullPath 赋值给webkitRelativePath**/
        const newFile = Object.defineProperty(file, 'webkitRelativePath', { value: path })
        files.push(newFile)
        future.resolve(1)
      })
      await future
    }
  }
  return files
}
