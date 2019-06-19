import React from "react";
import Control from "./control";

function controlStop(props) {
  return (
    <Control {...props} style={{ background: "#dc3545" }}>
      stop
    </Control>
  );
}

export default controlStop;
