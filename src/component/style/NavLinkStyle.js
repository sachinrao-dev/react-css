import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  navBar: {
    "& a": {
      color: "black",
      textDecoration: "none",
      fontSize: "18px",
      cursor: "pointer",
    },
  },
  nav: {
    textDecoration: "none",
    padding: "5px 8px 5px 8px",
    margin: "3px",
  },
});

export default useStyle;
