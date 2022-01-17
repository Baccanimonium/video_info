import PropTypes from "prop-types"

export const coreProps = {
  propTypes: {
    labelKey: PropTypes.string,
    multiple: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string, PropTypes.number])
  },
  defaultProps: {
    labelKey: "SYS_NAME",
    valueKey: "ID"
  }
}

export const selectProps = {
  propTypes: {
    ...coreProps.propTypes,
    options: PropTypes.array,
    reference: PropTypes.string,
    refParams: PropTypes.object,
  },
  defaultProps: {
    ...coreProps.defaultProps,
    refParams: {}
  }
}
