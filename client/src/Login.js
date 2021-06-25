import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import { makeStyles } from "@material-ui/core/styles";
import { loginSignupStyles as useStyles } from "./themes/theme"

const Login = (props) => {
  const history = useHistory();
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
    <Grid container justify="left">
      <Box className={classes.bgContainer}>
        <Box className={classes.image}>
          <div className={classes.textWrapper}>
            <h2 className={classes.text}>Converse with anyone with any language </h2>
          </div>
          <img class={classes.image} src="https://res.cloudinary.com/dc5yjx4v5/image/upload/v1624581061/bg-img_ouep5g.png"></img>


        </Box>
      </Box>
      <Box className={classes.login} mx="auto">
        <Grid container item>
          <Typography className={classes.login}>Don't have an account?</Typography>
          <Button className={classes.createaccount} onClick={() => history.push("/register")}>Create account</Button>
        </Grid>
        <form onSubmit={handleLogin}>
          <Grid>
            <Box className={classes.welcome}><h2>Welcome back!</h2></Box>

            <Grid>
              <FormControl fullWidth required>
                E-mail address
                <TextField
                  aria-label="username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <FormControl fullWidth required>
              Password
              <TextField
                aria-label="password"
                type="password"
                name="password"
              />
              <Button> Forgot?</Button>
            </FormControl>
            <Grid>
              <Button type="submit" variant="contained" size="large" disableElevation color="primary" className={classes.signin}>
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
