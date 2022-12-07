import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  panel3Container: {
    width: "85%",
    margin: "0 auto",
    marginTop: "50px",
    marginBottom: "50px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  iconContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selector: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  iconMui: {
    background: "red",
    // padding: "22px",
    fontSize: "40px",
    // width: "50px",
  },
});

export default useStyle;
