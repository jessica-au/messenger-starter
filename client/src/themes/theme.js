import { createMuiTheme, makeStyles } from "@material-ui/core";


export const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 12,
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
    opacity: "0.85",
  },
  text: {
    marginTop: "60%",
    textAlign: "center",
    width: 350,
    paddingLeft: 30,
    fontWeight: "normal",
  },
  bgContainer: {
    width: 425,
    color: "white",
    [theme.breakpoints.down('xs', 'sm', 'md', 'lg')]: {
      display: "none"
    },
  },
  loginContainer: {
    color: "grey",
    padding: '20px 10px 10px 10px',
    width: 375,
    margin: "0px 0px 0px 100px",
    [theme.breakpoints.down('xs', 'sm', 'md')]: {
      width: 310,
      backgroundColor: "white",
      margin: "0px 0px 0px 20px"
    },
  },
  loginPrompt: {
    alignItems: "center",
    height: "100%",
    display: "flex",
  },
  welcome: {
    color: "black"
  },
  createaccountButton: {
    marginLeft: "20px",
    padding: '15px 40px 15px 40px',
    boxShadow: '0px 2px 10px 2px lightgrey',
    fontStyle: 'bold',
    color: '#3A8DFF'
  },
  makeaccountText: {
    marginRight: 40,
  },
  signinButton: {
    margin: '50px 100px',
    padding: '15px 60px 15px 60px',
    fontWeight: 'bold',
  },
  
}))