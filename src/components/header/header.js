import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./styles.module.scss";

function header() {
  return (
    <nav className={styles.header}>
      <h1 className={styles.headerTitle}>
        <FontAwesomeIcon icon={["fas", "hourglass-half"]} />
        React Timer v2
      </h1>
    </nav>
  );
}

export default header;
