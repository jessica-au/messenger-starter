import React from "react";
import { Box, Typography } from "@material-ui/core";
import { loginSignupStyles as useStyles } from "../themes/theme";
import Bubble from "../assets/bubble.svg"

const Hero = () => {
    const classes = useStyles();

    return (
        <Box className={classes.bgContainer}>
            <Box className={classes.image}>
                <Box className={classes.textWrapper}>
                    <Typography className={classes.text} variant="h4">
                    <img alt="messageBubble" src={Bubble}/>
                        <br></br>
                        Converse with anyone with any language
                    </Typography>
                </Box>
                <img className={classes.image} alt="logo"
                    src="https://res.cloudinary.com/dc5yjx4v5/image/upload/v1624581061/bg-img_ouep5g.png">
                </img>
            </Box>
        </Box>
    )
}

export default Hero