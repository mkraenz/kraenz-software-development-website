import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { content } from "../content";

const useStyles = makeStyles(theme => ({
    container: {
        width: "100%",
        height: "90vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
    buttonContainer: {
        justifyContent: "space-evenly",
        margin: theme.spacing(5, 0, 1),
    },
    button: {},
}));

const HeroUnit: React.FunctionComponent = () => {
    const classes = useStyles({});
    return (
        <Container maxWidth={false} className={classes.container}>
            <div>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    {content.title}
                </Typography>
                <Typography variant="h5" align="center" component="p">
                    High Quality Web Development for you.
                </Typography>
                <Grid container className={classes.buttonContainer}>
                    <Grid item className={classes.button}>
                        <Button
                            variant="contained"
                            color="secondary"
                            href="#contact"
                        >
                            {content.contact.header}
                        </Button>
                    </Grid>
                    <Grid item className={classes.button}>
                        <Button
                            variant="outlined"
                            color="secondary"
                            href={content.urls.linkedIn}
                        >
                            {content.landingPageSecondaryButton}
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default HeroUnit;
