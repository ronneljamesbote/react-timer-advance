import React from "react";
import { TIMER_PHASES } from "../../constants";
import {
  ControlReset,
  ControlResume,
  ControlStart,
  ControlStop
} from "./controls";
import styles from "./styles.module.scss";

function controlPanel({
  canStart = false,
  className = "",
  onReset,
  onStart,
  onStop,
  state = "",
  ...restProps
}) {
  const classes = [styles.controlPanel, className];

  let controls = "";

  switch (state) {
    case TIMER_PHASES.HALTED:
      controls = (
        <React.Fragment>
          <ControlResume onClick={onStart} />
          <ControlReset onClick={onReset} />
        </React.Fragment>
      );
      break;
    case TIMER_PHASES.STARTED:
      controls = (
        <React.Fragment>
          <ControlStop onClick={onStop} />
          <ControlReset onClick={onReset} />
        </React.Fragment>
      );
      break;
    default:
      controls = <ControlStart disabled={canStart} onClick={onStart} />;
  }

  return (
    <div className={classes.join(" ")} {...restProps}>
      {controls}
    </div>
  );
}

export default controlPanel;
