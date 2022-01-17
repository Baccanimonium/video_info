import preciseRounding from "@/Utils/Math/preciseRounding"

export const arraySum = (array) => preciseRounding(array.reduce((acc, item) => acc + item))
export const arrayAverage = (array) => arraySum(array) / array.length
