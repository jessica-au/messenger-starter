import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import {loginSignupStyles as useStyles} from "./themes/theme"


const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justify="left">
       <Box className={classes.bgContainer}>
        <Box className={classes.image}>
          <div className={classes.textWrapper}>
            <h2 className={classes.text}>
            <SmsOutlinedIcon fontSize="large" /> <br></br>Converse with anyone with any language </h2> 
          </div>
          <img class={classes.image} src="https://res.cloudinary.com/dc5yjx4v5/image/upload/v1624581061/bg-img_ouep5g.png"></img>

          
        </Box>
      </Box>
      <Box className={classes.login} mx="auto">
        <Grid container item>
          <Typography className={classes.login}>Already have an account?</Typography>
          <Button className={classes.createaccount} onClick={() => history.push("/login")}>Login</Button>
        </Grid>
        <form onSubmit={handleRegister}>
          <Grid>
            <Box className={classes.welcome}><h2>Create an account.</h2></Box>
            <Grid>
              <FormControl fullWidth required>
              Username
                <TextField
                  aria-label="username"
                  name="username"
                  type="text"
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl fullWidth required>
                E-mail address
                <TextField
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl error={!!formErrorMessage.confirmPassword} fullWidth required>
                Password
                <TextField
                  aria-label="password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Button type="submit" variant="contained" size="large" disableElevation color="primary" className={classes.signin}>
              Create
            </Button>
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
