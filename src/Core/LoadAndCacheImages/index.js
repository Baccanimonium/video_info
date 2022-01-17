import { URL_FILE_LIST } from "@/APIList"
import { newApiService } from "@/api"

export const cache = new Map()

export function getImage(key) {
  if (cache.has(key)) {
    return cache.get(key)
  }
  const res = newApiService.get(`${URL_FILE_LIST}${key}`)
  cache.set(key, res)
  return res
}

export async function getBlob(key) {
  if (cache.has(key)) {
    return cache.get(key)
  }
  const res = window.URL.createObjectURL(
    new Blob([await newApiService.get(`${URL_FILE_LIST}${key}`, { responseType: "arraybuffer" })])
  )
  cache.set(key, res)
  return res
}
