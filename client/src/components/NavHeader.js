import React from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
} from "@material-ui/core";

import { loginSignupStyles as useStyles } from "../themes/theme";


const NavHeader = () => {
    const history = useHistory();
    const classes = useStyles();

    const routeDirection = history.location.pathname === "/register" ? "/login": "/register"
    const ctaText = history.location.pathname === "/register" ? "Login" : "Create account" 
    const ctaDetail = history.location.pathname === "/register" ? "Already have an account?" : "Dont have an account?"
    return (
        <Grid container item alignItems="center">
          <Box className={classes.makeaccountlink}>
            <Typography>
              {ctaDetail}
            </Typography>
          </Box>
          <Box>
            <Button className={classes.createaccountButton} onClick={() => history.push(routeDirection)}>{ctaText}</Button>
          </Box>
        </Grid>
    )
}

export default NavHeader