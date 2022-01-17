import composeRequests from "@/Utils/FunctionsCall/composeRequests"
import { newApiService } from "@/api"
import { REF_SERVICE_URL } from "@/constants"

export const refCache = new Map()

export async function getRef({ reference, params = {} }, valueKey = "ID") {
  try {
    const data = await newApiService.get(`${REF_SERVICE_URL}${reference}`, {
      errorMessage: "error was happened during download reference",
      params: {
        v_offset: 0,
        v_limit: 50,
        v_sort: "sys_name",
        ...params
      }
    })
    if (!refCache.has(reference)) {
      refCache.set(reference, new Map())
    }
    const map = refCache.get(reference)

    data.forEach((i) => {
      map.set(i[valueKey], i)
    })
    return data
  } catch (e) {
    return []
  }
}
export const loadRefList = composeRequests(
  async (...args) => {
    const defRefParams = {}
    const requests = args.reduce((acc, { v_find, reference, refParams = defRefParams, valueKey }) => {
      if (!acc.has(reference)) {
        acc.set(reference, new Map([]))
      }
      const req = acc.get(reference)
      if (!req.has(refParams)) {
        req.set(refParams, { v_find: [], valueKey })
      }
      req.get(refParams).v_find.push(v_find)

      return acc
    }, new Map())
    try {
      const result = []
      for (const [reference, req] of requests) {
        for (const [requestParams, { v_find, valueKey }] of req) {
          result.push(new Promise(async (resolve) => {
            try {
              const obj = await getRef({
                reference,
                params: { ...requestParams, v_find: v_find.join(",") }
              }, valueKey)
              resolve(v_find.reduce((acc, item) => {
                acc[item] = (Array.isArray(item)
                  ? item.map((i) => obj.find(({ [valueKey]: ID }) => ID === i))
                  : [obj.find(({ [valueKey]: ID }) => ID === item)])
                  .filter(v => v)
                return acc
              }, {}))
            } catch (e) {
              resolve([])
            }
          }))
        }
      }
      return (await Promise.all(result)).reduce((acc, i) => ({ ...acc, ...i }))
    } catch (e) {
      console.log("failure loading statuses buttons", e)
    }
  },
  10,
  "v_find"
)
