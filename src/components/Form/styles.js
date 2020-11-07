import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    background: "#487eb0",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    fontWeight: "800",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  textField: {
    color: "#fff",
  },
}));
