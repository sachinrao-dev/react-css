import React from "react";
import useStyle from "./style/FooterStyle";

function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.footerContainer}>
      <span className={classes.footerHeading}>
        © Copyright Ballistic Learning Pvt Ltd. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
