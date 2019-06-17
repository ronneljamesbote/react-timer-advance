import React from "react";
import Control from "./control";

function controlReset(props) {
  return (
    <Control {...props} style={{ background: "#007bff" }}>
      reset
    </Control>
  );
}

export default controlReset;
