import React from "react";
import logo from "./asset/BLlogo.png";
import NavLink from "./NavLink";
import useStyle from "./style/HeaderStyle";

function Header() {
  const classes = useStyle();
  return (
    <div className={classes.header}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <NavLink />
      </div>
    </div>
  );
}

export default Header;
