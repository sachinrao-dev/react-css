import React from "react";
import useStyle from "./style/BorderStyle";

function Border() {
  const classes = useStyle();
  return <div className={classes.border} />;
}

export default Border;
