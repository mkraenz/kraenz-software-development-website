import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        minHeight: 300,
        width: "100%",
        marginTop: "30vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        <Container
            maxWidth={false}
            component="main"
            className={classes.container}
        >
            <div>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Kraenz Software Development
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    High Quality Web Development for you.
                </Typography>
                <Grid container className={classes.buttonContainer}>
                    <Grid item className={classes.button}>
                        <Button variant="contained" color="secondary">
                            Contact
                        </Button>
                    </Grid>
                    <Grid item className={classes.button}>
                        <Button variant="contained" color="secondary">
                            LinkedIn
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default HeroUnit;
