import React, { Component } from "react"
import PropTypes from "prop-types"
import BsCheckBox from "@/Components/Fields/BsCheckBox"
import WrapperFilter from "@/Components/Filters/WrapperFilter"
import memoizeOne from "memoize-one"
import { search } from "@/Icons/search"
import Icon from "@/Components/Icon"
import { close } from "@/Icons/close"
import WithCloseWindow from "@/Core/RenderProps/withCloseWindow"
import { StyleInput } from "./styles"

export const SearchIcon = Icon(search)
const CloseIcon = Icon(close)
const styleInputBox = { border: "1px solid transparent" }

class CheckboxGroup extends Component {
  getGroupStyles = memoizeOne((maxHeight) => ({ maxHeight }))

  getAllSelected = memoizeOne((options = [], value, reverseMode) => {
    const isAllSelected = options.every(opt => value.some(val => this.findItem(val, opt)))

    return reverseMode ? !isAllSelected : isAllSelected
  })

  sortedOptions = memoizeOne((tempQuery, options) => {
    if (!tempQuery) return options
    return this.sortOptions(options)
  })

  constructor(props) {
    super(props)
    this.state = {
      edited: false,
      tempQuery: "",
    }
    this.searchInputRef = React.createRef()
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { edited } = this.state
    if (edited !== prevState.edited) {
      if (edited) {
        this.searchInputRef.current.focus()
      } else {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ tempQuery: "" })
      }
    }
  }

  selectAllItems = (value) => {
    const { returnObjects, valueKey, options } = this.props
    const nArray = Array.from(value)
    options.forEach(opt => {
      if (!nArray.some(val => this.findItem(val, opt))) {
        nArray.push(returnObjects ? opt : opt[valueKey])
      }
    })
    return nArray
  }

  unSelectAllItems = (value, options) => {
    const nArray = Array.from(value)
    options.forEach(opt => {
      const i = nArray.findIndex(val => this.findItem(val, opt))
      if (i >= 0) {
        nArray.splice(i, 1)
      }
    })
    return nArray
  }

  sortOptions = (options) => {
    const { props: { labelKey }, state: { tempQuery } } = this
    const q = tempQuery.toLowerCase()
    return options
      .filter(item => String(typeof item === "string" ? item : item[labelKey]).toLowerCase().indexOf(q) >= 0)
      .sort(({ [labelKey]: SYS_NAME }, { [labelKey]: S_SYS_NAME }) => String(SYS_NAME)
        .toLowerCase().indexOf(q) > String(S_SYS_NAME).toLowerCase().indexOf(q) ? 1 : -1)
  }

  findItem = (val, opt) => {
    const { returnObjects, valueKey } = this.props
    return (returnObjects ? val[valueKey] : val) === opt[valueKey]
  }

  handleCheckAll = (val) => {
    const { options = [], value, reverseMode, onInput, id } = this.props
    onInput(
      (reverseMode && !val) || (!reverseMode && val)
        ? this.selectAllItems(value, options)
        : this.unSelectAllItems(value, options),
      id
    )
  }

  searchInput = (value) => {
    this.setState({ tempQuery: value })
  }

  dropValues = () => {
    this.setState({ tempQuery: "" })
  }

  openSearchField = () => {
    this.setState({ edited: true })
  }

  closeWindow = () => {
    this.setState({ edited: false })
  }

  handleEscape = ({ key }) => {
    if (key === "Escape") {
      this.closeWindow()
    }
  }

  render() {
    const {
      blockTitle, labelKey, maxHeight, options, value, reverseMode, loading, disabled, style, inputStyles,
      showToggleIndicator, filterable
    } = this.props
    const { edited, tempQuery } = this.state
    const checkboxes = this.sortedOptions(tempQuery, options).map(item => {
      const { [labelKey]: label } = item
      return (
        <div className="p-r-14 p-l-14" key={label}>
          <BsCheckBox
            {...this.props}
            className="m-b-15"
            checkBoxValue={item}
            label={label}
            disabled={disabled || loading}
            style={style}
          />
        </div>
      )
    })
    if (!filterable) {
      return (
        <div>
          {checkboxes}
        </div>
      )
    }
    const slotTitle = (
      <div className="display-flex a-i-center w-100">
        <BsCheckBox
          id="selectAll"
          value={this.getAllSelected(options, value, reverseMode)}
          disabled={disabled || loading}
          onInput={this.handleCheckAll}
          style={style}
        />
        {!edited
          ? <div className="p-l-10">{blockTitle}</div>
          : (
            <StyleInput
              inputStyles={inputStyles}
              ref={this.searchInputRef}
              type="text"
              placeholder="Пожалуйста, введите текст"
              value={tempQuery}
              onInput={this.searchInput}
              onKeyup={this.handleEscape}
              className="m-l-10 p-0"
              styleInputBox={styleInputBox}
              id={1}
            />
          )}
        {tempQuery
          ? (
            <CloseIcon
              size="12"
              className={`m-l-a transition-grey-gold cursor ${showToggleIndicator ? "m-r-15" : "m-r-0"}`}
              onClick={this.dropValues}
            />
          )
          : (
            <SearchIcon
              className={`m-l-a transition-grey-gold ${edited ? "active" : ""}
               cursor ${showToggleIndicator ? "m-r-15" : "m-r-0"}`}
              size="14"
              onClick={this.openSearchField}
            />
          )}
      </div>
    );
    return options.length > 0 ? (
      <WithCloseWindow closeWindow={this.closeWindow}>
        {(onMouseDown) => (
          <WrapperFilter
            slotTitle={slotTitle}
            style={this.getGroupStyles(maxHeight)}
            onMouseDown={onMouseDown}
            showToggleIndicator={showToggleIndicator}
          >
            {checkboxes}
          </WrapperFilter>
        )}
      </WithCloseWindow>
    ) : null
  }
}

CheckboxGroup.propTypes = {
  onInput: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  blockTitle: PropTypes.string,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  maxHeight: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.array,
  returnObjects: PropTypes.bool,
  reverseMode: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  inputStyles: PropTypes.object,
  showToggleIndicator: PropTypes.bool,
  filterable: PropTypes.bool
}

CheckboxGroup.defaultProps = {
  blockTitle: "",
  labelKey: "SYS_NAME",
  valueKey: "ID",
  maxHeight: "100%",
  filterable: true,
  options: [],
  value: [],
  showToggleIndicator: true
}

export default CheckboxGroup
