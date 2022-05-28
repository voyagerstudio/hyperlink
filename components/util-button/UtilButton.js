import React from "react";
import reactDom from "react-dom";
import './UtilButton.css';

export function UtilButton({label, style}) {
  return (
    <button type="button" className={`btn btn--${style}`}>{label}</button>
  )
}