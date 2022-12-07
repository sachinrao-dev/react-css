import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  panel1Container: {
    width: "85%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto",
    marginTop: "40px",
  },
  mainContainer: {
    width: "85%",
    margin: "0 auto",
  },
  imageLogo: {
    width: "75%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "40px",
    // height: "30px",
  },
  learnButton: {
    width: "70%",
    marginLeft: "80px",
  },
  logo: {
    height: "70px",
  },
});

export default useStyle;
