import React from "react";
import PropTypes from 'prop-types';
import reactDom from "react-dom";

export function UtilButton({label, style, size}) {
  return (
    <button type="button" className={`btn btn--${style} btn--${size}`}>{label}</button>
  )
}

UtilButton.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}