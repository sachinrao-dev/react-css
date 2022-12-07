/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { Link } from "@mui/material";
import useStyle from "./style/NavLinkStyle";

function NavLink() {
  const classes = useStyle();
  return (
    <div className={classes.navBar}>
      <Link className={classes.nav} href="#">Home</Link>
      <Link className={classes.nav} href="#">About us</Link>
      <Link className={classes.nav} href="#">How we Work</Link>
      <Link className={classes.nav} href="#">Portfolio</Link>
      <Link className={classes.nav} href="#">Careers</Link>
      <Link className={classes.nav} href="#">Contact</Link>
    </div>
  );
}

export default NavLink;
