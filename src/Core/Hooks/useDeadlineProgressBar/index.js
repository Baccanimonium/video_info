import { useMemo } from "react"
import dayjs from "dayjs"
import { PRESENT_DATE_FORMAT } from "@/constants"

export default (creationDate, deadlineDate) => {
  const getProgressbarWidth = useMemo(() => {
    const currentDate = dayjs().valueOf()
    const PCreationDate = dayjs(creationDate, PRESENT_DATE_FORMAT).valueOf()
    const PDeadlineDate = dayjs(deadlineDate, PRESENT_DATE_FORMAT).valueOf()
    return PCreationDate && PDeadlineDate
      ? currentDate < PDeadlineDate
        ? Math.round(((currentDate - PCreationDate) / (PDeadlineDate - PCreationDate)) * 100)
        : 100
      : 0
  }, [creationDate, deadlineDate])
  return useMemo(() => ({
    background: `var(${getProgressbarWidth >= 100
      ? "--color-grey-darken-0"
      : getProgressbarWidth > 80
        ? "--pink"
        : "--color-light-gold-1"
    })`,
    width: `${getProgressbarWidth}%`
  }), [getProgressbarWidth])
}
