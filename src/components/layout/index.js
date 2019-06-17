// Do not delete this file as this will serve as the top parent component
// of all components
// If you want to change or remove this, update the router.js file in regard
// to those changes

import React from "react";
import "../fontawesome";
import "./styles.scss";

function layout({ children }) {
  return <div>{children}</div>;
}

export default layout;
