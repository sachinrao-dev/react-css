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
    "& svg": {
      // background: "red",
      height: "90px",
      width: "90px",
      border: "1px solid",
      borderRadius: "50px",
      padding: "10px",
      opacity: "0.5",
    },
  },
  selector: {
    marginTop: "30px",
    marginBottom: "30px",
  },
});

export default useStyle;
