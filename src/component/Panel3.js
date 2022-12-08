import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import ContactsIcon from "@mui/icons-material/Contacts";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import useStyle from "./style/Panel3Style";

function Panel3() {
  const classes = useStyle();
  return (
    <div className={classes.panel3Container}>
      <div className={classes.selector}>
        <h2>Sectors we work for</h2>
      </div>
      <div className={classes.iconContainer}>
        <BusinessIcon />
        <ContactsIcon />
        <SchoolIcon />
        <GroupsIcon />
      </div>
    </div>
  );
}

export default Panel3;
