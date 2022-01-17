import React, { useCallback, useMemo, useState } from "react"
import PropTypes from "prop-types"
import Search from "@/Components/Search"
import { arrows } from "@/Icons/arrows/arrows"
import { arrowbottom } from "@/Icons/arrows/arrowbottom"
import { arrowtop } from "@/Icons/arrows/arrowtop"
import Icon from "@/Components/Icon"
import { close } from "@/Icons/close"
import { ClearFilter, TitleLabel, Title, StyleBtn, WrapperBtnAndTitle } from "./styles"

const Arrows = Icon(arrows)
const ArrowsBottom = Icon(arrowbottom)
const ArrowsTop = Icon(arrowtop)
const CloseIcon = Icon(close)

const EDirections = {
  ASC: "+id",
  DESC: "-id"
}

const FiltersSubmit = (
  { withouthFilter, filtersCount, dropFilters, sortDirect, handleSortInput,
    sortQuery, withouthSort, children, toggleSideBarFilter, findParam, filterQuery, handleInput, className,
    data, uploadDataOnce
  }
) => {
  const [numberClick, updateNumberClick] = useState(0)
  const [sortDirections] = useState(sortDirect || EDirections)
  const [titleSort, updateTitleSort] = useState("")

  const IconSort = useMemo(() => {
    switch (sortQuery) {
      case EDirections.DESC:
        return ArrowsBottom
      case sortDirect.DESC:
        return ArrowsBottom
      case EDirections.ASC:
        return ArrowsTop
      case sortDirect.ASC:
        return ArrowsTop
      default:
        return Arrows
    }
  }, [sortQuery, sortDirect.DESC, sortDirect.ASC])

  const getSort = () => {
    numberClick === 2 ? updateNumberClick(0) : updateNumberClick(numberClick + 1)
    switch (numberClick) {
      case 1:
        handleSortInput(sortDirections.ASC)
        updateTitleSort("Low to high")
        break
      case 2:
        handleSortInput(sortDirections.DESC)
        updateTitleSort("High to low")
        break
      default:
        handleSortInput(undefined)
        updateTitleSort("")
    }
  }

  const onDropFilters = useCallback(() => {
    dropFilters({})
  }, [dropFilters])

  const disabledFiltersSubmit = useMemo(() => Object.keys(filterQuery).length === 0 && uploadDataOnce && data.length === 0,
    [data, filterQuery, uploadDataOnce])
  return (
    <div className={`j-c-space-between display-flex m-b-15 h-30 ${className}`}>
      <div className="display-flex" id="buttonFilter">
        {!withouthFilter && (
        <StyleBtn
          disabled={disabledFiltersSubmit}
          className="golden btn-filter btn j-c-center display-flex a-i-center m-r-10"
          onClick={toggleSideBarFilter}
          classNameChildren="j-c-center display-flex a-i-center"
          name="Filter"
        >
          filter
          {filtersCount > 0 && (
          <span
            className="b-r-50percent w-18 h-18 bg-color-blackDarken-2 j-c-center display-flex a-i-center fs-10 fw-400 m-l-10"
          >
            {filtersCount}
          </span>
          )}
        </StyleBtn>
        )}
        {filtersCount > 0 && !withouthFilter && (
          <ClearFilter
            onClick={onDropFilters}
          >
            {filtersCount === 1
              ? (<span>Clear filters</span>)
              : (<span className="display-i-b">Clear all filters</span>)}
            <CloseIcon size="13" className="cursor color-greyDarken-1" />
          </ClearFilter>
        )}
        <WrapperBtnAndTitle>
          {!withouthSort && (
            <StyleBtn
              className="min-button golden btn-filter btn j-c-center display-flex a-i-center m-r-10"
              disabled={disabledFiltersSubmit}
              onClick={getSort}
            >
              <IconSort size="20" />
            </StyleBtn>
          )}
          {titleSort && (
            <TitleLabel>
              <Title>
                {titleSort}
              </Title>
            </TitleLabel>
          )}
        </WrapperBtnAndTitle>
        <Search
          id={findParam}
          value={filterQuery[findParam]}
          disabled={disabledFiltersSubmit}
          onInput={handleInput}
          name="InputForSearch"
        />
      </div>
      {children}
    </div>
  )
}

FiltersSubmit.propTypes = {
  withouthFilter: PropTypes.bool,
  filtersCount: PropTypes.number,
  dropFilters: PropTypes.func,
  sortDirect: PropTypes.object,
  handleSortInput: PropTypes.func,
  sortQuery: PropTypes.string,
  withouthSort: PropTypes.bool,
  toggleSideBarFilter: PropTypes.func,
  findParam: PropTypes.string,
  filterQuery: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  data: PropTypes.array,
  uploadDataOnce: PropTypes.bool,
}

FiltersSubmit.defaultProps = {
  data: [],
  withouthFilter: false,
  filtersCount: "",
  sortDirect: {
    ASC: "+id",
    DESC: "-id"
  },
  sortQuery: "",
  withouthSort: false,
  findParam: "query_params",
  filterQuery: {},
  className: ""
}

export default FiltersSubmit
