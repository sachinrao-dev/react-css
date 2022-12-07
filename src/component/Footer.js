import React from "react";
import useStyle from "./style/FooterStyle";

function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.footerContainer}>
      <h1>© Copyright Ballistic Learning Pvt Ltd. All Rights Reserved.</h1>
    </div>
  );
}

export default Footer;
