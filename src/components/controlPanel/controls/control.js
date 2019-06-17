import React from "react";
import styles from "./styles.module.scss";

function control({ children = "label", className = "", ...restProps }) {
  const classes = [styles.control, className];

  return (
    <button className={classes.join(" ")} {...restProps}>
      {children}
    </button>
  );
}

export default control;
