import React from "react";
import { Button } from "@mui/material";
import PanelImage from "./asset/mainbanner.png";
import ModleLogo from "./asset/mp_logo.png";
import CertificationLogo from "./asset/CertificationLogo.jpg";
import AmogonLogo from "./asset/Amazon_partner.png";

import useStyle from "./style/Panel1Style";

function Panel1() {
  const classes = useStyle();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.panel1Container}>
        <div>
          <h2>Flexible eLearning and HCM solutions</h2>
          <p>
            Implementing scalable custom eLearning and HCM systems since 2005
          </p>
          <p>
            Multi domain experience. Comprehensive expertise. Dedicated support.
          </p>
        </div>
        <div>
          <img src={PanelImage} alt="" />
        </div>
      </div>
      <div className={classes.learnButton}>
        <Button variant="outlined">Learn How</Button>
      </div>
      <div className={classes.imageLogo}>
        <img className={classes.logo} src={ModleLogo} alt="" />
        <img className={classes.logo} src={CertificationLogo} alt="" />
        <img className={classes.logo} src={AmogonLogo} alt="" />
      </div>
    </div>
  );
}

export default Panel1;
