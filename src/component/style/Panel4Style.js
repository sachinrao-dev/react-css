import { makeStyles } from "@mui/styles";
import backgroundImage from "../asset/Picture.png";

const useStyle = makeStyles({
  panel4Container: {
    backgroundImage: `url(${backgroundImage})`,
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "500px",
    // background: "red",
  },
  para: {
    width: "70%",
    margin: "0 auto",
    color: "#fff",
    paddingTop: "60px",
  },
});

export default useStyle;
