import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { content } from "../content";

const useStyles = makeStyles(theme => ({
    cardHeader: {
        backgroundColor: theme.palette.primary.light,
    },
    container: {
        marginTop: theme.spacing(16),
        marginBottom: theme.spacing(16),
    },
    mailToSubheader: {
        color: theme.palette.text.primary,
    },
    title: {
        marginBottom: theme.spacing(8),
    },
    cardContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
}));

const data = content.services;

const Services: React.FunctionComponent = () => {
    const classes = useStyles({});
    return (
        <Container maxWidth="md" className={classes.container} id={data.id}>
            <Typography
                component="h2"
                variant="h3"
                align="center"
                color="textPrimary"
                gutterBottom
                className={classes.title}
            >
                {data.title}
            </Typography>
            <Typography component="p">{data.description}</Typography>
        </Container>
    );
};

export default Services;
