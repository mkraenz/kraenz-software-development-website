import Typography from "@material-ui/core/Typography";
import React, { FunctionComponent } from "react";

const Title: FunctionComponent = props => {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {props.children}
        </Typography>
    );
};

export default Title;
