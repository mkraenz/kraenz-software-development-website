import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
    image: {
        backgroundRepeat: "no-repeat",
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
