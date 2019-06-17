import React from "react";
import styles from "./styles.module.scss";

function key({
  className = "",
  onClick,
  text = "",
  value = null,
  ...restProps
}) {
  const classes = [styles.key, className];

  return (
    <button
      className={classes.join(" ")}
      onClick={onClick}
      disabled={!text || text === null}
      value={value}
      {...restProps}
    >
      {text}
    </button>
  );
}

export default key;
