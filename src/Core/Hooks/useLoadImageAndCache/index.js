import { useEffect, useState } from "react"
import { getImage } from "@/Core/LoadAndCacheImages"

export default ({ defaultIcon, value, loadFunction = getImage, dataKey }) => {
  const [icon, setIcon] = useState(defaultIcon)
  useEffect(() => {
    (async () => {
      const normalizeValue = dataKey ? value[dataKey] : value
      if (normalizeValue) {
        try {
          setIcon(await loadFunction(normalizeValue))
        } catch (e) {
          setIcon(defaultIcon)
        }
      }
    })()
  }, [dataKey, defaultIcon, loadFunction, value])
  return icon
}
