import React, { useState, useRef, useCallback } from "react"

export default (OriginalComponent) => ({ value, onSubmit, ...props }) => {
  const [filtersSnapShot, updateFiltersSnapShot] = useState(value)
  const filtersSnapShotRef = useRef(filtersSnapShot)
  filtersSnapShotRef.current = filtersSnapShot
  const [filterChanged, updateFilterChanged] = useState(false)
  // нажимаем на кнопку apply
  const applyFilters = useCallback((...args) => {
    onSubmit(filtersSnapShot, ...args)
    updateFilterChanged(false)
  }, [onSubmit, filtersSnapShot])

  // изменение массива тэгов
  const updateSnapshot = useCallback((value, id) => {
    updateFiltersSnapShot({ ...filtersSnapShotRef.current, [id]: value })
    updateFilterChanged(true)
  }, [])
  const handleResetValue = useCallback((value) => {
    updateFiltersSnapShot(value)
    updateFilterChanged(true)
  }, [])

  return (
    <OriginalComponent
      {...props}
      value={filtersSnapShot}
      onInput={updateSnapshot}
      onSubmit={applyFilters}
      onResetValue={handleResetValue}
      changed={filterChanged}
    />
  )
}
