import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
    image: {
        backgroundImage:
            "linear-gradient(30deg, rgba(139,195,74,1) 30%, rgba(252,252,16,1) 150%)",
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "dark"
                ? theme.palette.grey[900]
                : theme.palette.grey[50],
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
    },
}));

const BackgroundImg: React.FunctionComponent = props => {
    const classes = useStyles({});
    return <div className={classes.image}>{props.children}</div>;
};

export default BackgroundImg;
