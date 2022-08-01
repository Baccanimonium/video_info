/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect, useMemo, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import BsInput from "@/Components/Fields/BsInput"
import useStoreVarInRef from "@/Core/Hooks/useWrapVariableInRef"
import debounce from "@/Utils/debounce"
import RenderOverlayMenu from "@/Components/OverlayMenu/RenderOverlayMenu"
import WithCloseWindow from "@/Core/RenderProps/withCloseWindow"
import ScrollBar from "@/Components/ScrollBar"

const scrollOptions = { wheelPropagation: false }

const OptionContainer = styled.div`
  line-height: 1.42857143; /* Normalize line height */
  display: block;
  padding: 5px 15px;
  clear: both;
  white-space: normal;
  cursor: pointer;
  &:hover {
    background-color: var(--color-grey-light-2);
  }
`

const ScrollOptionContainer = styled(ScrollBar)`
  max-height: 200px;
`

const AutoComplete = ({ onInput, onFocus, onBlur, localStorageKey, memoizeTimeout, value, id, ...props }, ref) => {
  const [isInputFocused, setFocusedFlag] = useState(false)
  const [renderMenuFlag, setRenderMenuFlag] = useState(false)
  const [cache, setCache] = useState([])
  const cacheRef = useStoreVarInRef(cache)

  useEffect(() => {
    if (isInputFocused) {
      const storedCache = JSON.parse(localStorage.getItem(localStorageKey))
      if (storedCache) {
        setCache(storedCache)
      }
      return () => {
        localStorage.setItem(localStorageKey, JSON.stringify(cacheRef.current))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInputFocused])

  const onFocusInput = useCallback((e) => {
    setFocusedFlag(true)
    onFocus(e)
  }, [onFocus])

  const onBlurInput = useCallback((e) => {
    setFocusedFlag(false)
    onBlur(e)
  }, [onFocus])
  const onUnFocusInput = useCallback(() => { setFocusedFlag(false) }, [])
  const addItemToCache = useCallback(debounce((message) => {
    const nextCache = [...cacheRef.current, message]
    const index = cacheRef.current.indexOf(message)
    if (index >= 0) {
      nextCache.splice(index, 1)
    }
    setCache(nextCache)
  }, memoizeTimeout), [])

  const applyOption = useCallback((newValue) => () => {
    onInput(newValue, id)
    setRenderMenuFlag(false)
  }, [id, onInput])

  const onInputMiddleware = useCallback((value, ...args) => {
    onInput(value, ...args)
    setRenderMenuFlag(true)
    if (value) {
      addItemToCache(value)
    }
  }, [addItemToCache, onInput])
  // в кеш попадают данные слева на право, поэтому каждый новый элемент мы кидаем в начало, получая самые релевантные значения в начале
  // остается только рассортировать их по индексу и разложить совпадения с лева на право
  const relevantMessages = useMemo(() => [...cache.reduce((acc, c) => {
    const index = c.indexOf(value)
    if (index >= 0 && c !== value) {
      if (!acc.has(index)) {
        acc.set(index, [])
      }
      acc.get(index).unshift(c)
    }
    return acc
  }, new Map())]
    .sort(([i], [sI]) => sI - i)
    .reduce((acc, { 1: payload }) => {
      acc.push(...payload)
      return acc
    }, [])
    .slice(0, 20),
  [cache, value])

  return (
    <WithCloseWindow closeWindow={onUnFocusInput} byKey={isInputFocused}>
      {(onMouseDown) => (
        <RenderOverlayMenu
          onOpenOverlayMenu={onFocusInput}
          renderOverlayMenu={isInputFocused && renderMenuFlag && relevantMessages.length > 0}
        >
          {(overlayBoundRef, onOpenOverlayMenu, OverlayMenu) => (
            <div
              className="flex w-100"
              ref={overlayBoundRef}
              onMouseDown={onMouseDown}
            >
              <BsInput
                ref={ref}
                {...props}
                id={id}
                value={value}
                onInput={onInputMiddleware}
                onFocus={onOpenOverlayMenu}
              />
              <OverlayMenu
                className="no-user-select"
                renderTip={false}
                containerMargin="2px"
              >
                <ScrollOptionContainer
                  options={scrollOptions}
                >
                  {relevantMessages.map((m) => (
                    <OptionContainer onClick={applyOption(m)}>
                      {m}
                    </OptionContainer>
                  ))}
                </ScrollOptionContainer>
              </OverlayMenu>
            </div>
          )}
        </RenderOverlayMenu>
      )}
    </WithCloseWindow>
  )
}

AutoComplete.propTypes = {
  onInput: PropTypes.func.isRequired,
  localStorageKey: PropTypes.string.isRequired,
  memoizeTimeout: PropTypes.number,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.string
}

AutoComplete.defaultProps = {
  memoizeTimeout: 1000,
  onFocus: () => null,
  onBlur: () => null
}

export default React.forwardRef(AutoComplete)
