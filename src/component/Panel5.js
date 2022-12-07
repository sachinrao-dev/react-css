import React from "react";
import { Button } from "@mui/material";
import useStyle from "./style/Panel5Style";

function Panel5() {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.heading}>
        <h1>We would love to help</h1>
      </div>
      <div className={classes.panel5Container}>
        <div className={classes.btn}>
          <Button variant="outlined">Learn How</Button>
          <Button variant="outlined">Learn How</Button>
          <Button variant="outlined">Learn How</Button>
        </div>
      </div>
    </div>
  );
}

export default Panel5;
