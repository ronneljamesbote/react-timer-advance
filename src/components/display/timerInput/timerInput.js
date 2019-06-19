import React from "react";
import styles from "./styles.module.scss";

function timerInput({
  className = "",
  label = "label",
  onChange,
  onFocus,
  selected = false,
  value = "00",
  ...restProps
}) {
  const classes = [styles.timerInput, className];

  return (
    <div className={classes.join(" ")}>
      <label>{label}</label>
      <input
        className={selected ? styles.selected : undefined}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        {...restProps}
      />
    </div>
  );
}

export default timerInput;
