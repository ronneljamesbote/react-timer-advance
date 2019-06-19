import React from "react";
import { getTimeFormatted } from "../../libs";
import styles from "./styles.module.scss";

function countdown({ className = "", time = 0, ...restProps }) {
  const classes = [styles.countdown, className];

  return (
    <div className={classes.join(" ")}>
      <div className={styles.countdownLabels}>
        <label>h</label>
        <label>m</label>
        <label>s</label>
        <label>ms</label>
      </div>
      <div className={styles.countdownDisplay} {...restProps}>
        {getTimeFormatted(time) || "00:00:00:00"}
      </div>
    </div>
  );
}

export default countdown;
