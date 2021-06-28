import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,

  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import { loginSignupStyles as useStyles } from "./themes/theme";

import NavHeader from "./components/NavHeader"
import Hero from "./components/Hero"


const Login = (props) => {

  const classes = useStyles();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justify="space-start">
      <Hero />
      <Box className={classes.loginContainer}> 
        <NavHeader/>
        <form className="form" onSubmit={handleLogin}>
          <Grid >
            <Box className={classes.welcome}>
            <h2>Welcome back!</h2>
            </Box>
            <Grid>
              <FormControl fullWidth required>
                <br/><br/>
                <label for="username">E-mail address</label> <br/>
                <TextField
                  id="username"
                  aria-label="username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <FormControl fullWidth required>
              <br/> <br/>
              <label for="password">Password</label> <br/>
              <TextField
                id="password"
                aria-label="password"
                type="password"
                name="password"
              />
            </FormControl>
            <Grid>
              <Button type="submit" variant="contained" size="large" disableElevation color="primary" className={classes.signinButton}>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
