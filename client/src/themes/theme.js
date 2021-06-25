import { createMuiTheme, makeStyles } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold"
      }
    }
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" }
  }
});

export const loginSignupStyles = makeStyles(()=>({
  textWrapper: {
    background: 'linear-gradient(#3A8DFF 15%, #86B9FF 85%)',
    height: 700,
    width: 425,
    position: "absolute",
    opacity: "0.85"
  },
  text: {
    marginTop: "60%",
    textAlign: "center",
    width: 250,
    paddingLeft: 75,
  },
  image: {
    // background: 'linear-gradient(#3A8DFF 15%, #86B9FF 85%)',
  },
  bgContainer: {
    width: 425,
    color: "white",
  },
  login: {
    color: "grey",
    padding: '20px 10px 10px 10px'
  },
  welcome: {
    color: "black"
  },
  createaccount: {
    margin: 10,
    padding: '10px 40px 10px 40px',
    boxShadow: '0px 2px 10px 2px lightgrey',
    fontStyle: 'bold',
    color: '#3A8DFF'
  },
  signin: {
    margin: '50px'
  }
}))