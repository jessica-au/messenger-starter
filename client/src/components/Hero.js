import React from "react";
import { Box } from "@material-ui/core";
import { loginSignupStyles as useStyles } from "../themes/theme";

const Hero = () => {
    const classes = useStyles();

    return (
        <Box className={classes.bgContainer}>
            <Box className={classes.image}>
                <div className={classes.textWrapper}>
                    <h1 className={classes.text}>
                    <i class="far fa-comment-dots" style={{fontSize: "70px", marginBottom: 20}}/>
                        <br></br>
                        Converse with anyone with any language
                    </h1>
                </div>
                <img className={classes.image} alt="logo"
                    src="https://res.cloudinary.com/dc5yjx4v5/image/upload/v1624581061/bg-img_ouep5g.png">
                </img>
            </Box>
        </Box>
    )
}

export default Hero