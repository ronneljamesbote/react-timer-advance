import React from "react";
import { TIME_PARTS } from "../../constants";
import Separator from "./separator";
import styles from "./styles.module.scss";
import TimerInput from "./timerInput";

function display({
  className = "",
  onChange,
  onFocus,
  selected = false,
  values = {},
  ...restProps
}) {
  const classes = [styles.display, className];
  const { hour, minute, second } = values;

  return (
    <div className={classes.join(" ")} {...restProps}>
      <TimerInput
        label="h"
        name={TIME_PARTS.HOUR}
        onChange={onChange}
        onFocus={onFocus}
        selected={selected === TIME_PARTS.HOUR}
        value={hour || "00"}
      />
      <Separator />
      <TimerInput
        label="m"
        name={TIME_PARTS.MINUTE}
        onChange={onChange}
        onFocus={onFocus}
        selected={selected === TIME_PARTS.MINUTE}
        value={minute || "00"}
      />
      <Separator />
      <TimerInput
        label="s"
        name={TIME_PARTS.SECOND}
        onChange={onChange}
        onFocus={onFocus}
        selected={selected === TIME_PARTS.SECOND}
        value={second || "00"}
      />
    </div>
  );
}

export default display;
