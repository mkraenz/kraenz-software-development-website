import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const backgroundImgUrl = "/programming-blur.jpg";

const useStyles = makeStyles(theme => ({
    image: {
        backgroundImage: `url(${backgroundImgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "dark"
                ? theme.palette.grey[900]
                : theme.palette.grey[50],
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
    },
    filter: {
        backgroundColor: "rgb(0,0,0,0.5)",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
}));

const BackgroundImg: React.FunctionComponent = props => {
    const classes = useStyles({});
    return (
        <div className={classes.image}>
            <div className={classes.filter}>{props.children}</div>
        </div>
    );
};

export default BackgroundImg;
