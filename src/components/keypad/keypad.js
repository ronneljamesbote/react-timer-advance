import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Key from "./key";
import styles from "./styles.module.scss";

function keypad({ className = "", keys = [], onKeyClick, ...restProps }) {
  const classes = [styles.keypad, className];

  return (
    <div className={classes.join(" ")} {...restProps}>
      <Key onClick={onKeyClick} text="1" value="1" />
      <Key onClick={onKeyClick} text="2" value="2" />
      <Key onClick={onKeyClick} text="3" value="3" />
      <Key onClick={onKeyClick} text="4" value="4" />
      <Key onClick={onKeyClick} text="5" value="5" />
      <Key onClick={onKeyClick} text="6" value="6" />
      <Key onClick={onKeyClick} text="7" value="7" />
      <Key onClick={onKeyClick} text="8" value="8" />
      <Key onClick={onKeyClick} text="9" value="9" />
      <Key
        onClick={onKeyClick}
        text={<FontAwesomeIcon icon={["fas", "times"]} />}
        value="clear"
      />
      <Key onClick={onKeyClick} text="0" value="0" />
      <Key disabled />
    </div>
  );
}

export default keypad;
