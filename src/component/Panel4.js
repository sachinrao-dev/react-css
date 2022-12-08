import React from "react";
import { Button } from "@mui/material";
import useStyle from "./style/Panel4Style";

function Panel4() {
  const classes = useStyle();
  return (
    <div className={classes.panel4Container}>
      <div className={classes.para}>
        <h1>Taking education to new heights</h1>
        <p>
          Reputed institutions, publishers and other education providers employ
          our expertise to implement custom
        </p>
        <p>
          eLearning solutions to enhance outreach, teaching & assessment
          practices, and student engagement.
        </p>
        <Button variant="contained">Explore</Button>
      </div>
    </div>
  );
}

export default Panel4;
