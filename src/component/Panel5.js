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
          <div className={classes.btn1}>
            <Button variant="outlined" className={classes.portfolio}>PortFolio</Button>
          </div>
          <div className={classes.btn2}>
            <Button variant="outlined" className={classes.studies}>Case Studies</Button>
          </div>
          <div className={classes.btn3}>
            <Button variant="outlined" className={classes.contact}>Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel5;
