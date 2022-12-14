import { makeStyles } from "@mui/styles";
import Panel5Background from "../asset/help.png";

const useStyle = makeStyles({
  panel5Container: {
    backgroundImage: `url(${Panel5Background})`,
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "500px",
    marginBottom: "50px",
  },
  heading: {
    width: "85%",
    marginTop: "50px",
    marginBottom: "50px",
    margin: "0 auto",
    textAlign: "center",
    "& h1 ": {
      color: "red",
    },
  },
  btn: {
    display: "flex",
    flexDirection: "column",
    width: "20%",
    margin: "8px",
    position: "absolute",
    right: "0",
  },
  btn1: {
    margin: "10px 0",
    "& button": {
      border: "1px solid green",
      width: "100%",
    },
  },
  btn2: {
    margin: "10px 0",
    "& button": {
      border: "1px solid red",
      width: "100%",
    },
  },
  btn3: {
    margin: "10px 0",
    "& button": {
      border: "1px solid yellow",
      width: "100%",
    },
  },
});

export default useStyle;
