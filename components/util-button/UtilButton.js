import React from "react";
import PropTypes from 'prop-types';
import reactDom from "react-dom";
import styles from './UtilButton.module.css'


export function UtilButton({label, style, size}) {
  return (
    <button type="button" className={`${styles.btn} btn--${style} ${styles.btn}--${size}`}>{label}</button>
  )
}

UtilButton.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}