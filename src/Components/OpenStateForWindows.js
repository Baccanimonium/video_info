import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';

const OpenStateForWindows = ({ children }) => {
  const [windowState, setWindowState] = useState(false);

  const openWindow = useCallback((e) => setWindowState(e), [])
  const closeWindow = useCallback(() => setWindowState(false), [])

  return children({ windowState, openWindow, closeWindow });
};

OpenStateForWindows.propTypes = {
  children: PropTypes.func.isRequired,
};

export default OpenStateForWindows;