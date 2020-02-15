import Container from "@material-ui/core/Container";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import { content } from "../content";
import ImgMediaCard from "./ImgMediaCard";

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

const data = content.latestWork;

const LatestWork: React.FunctionComponent = () => {
    const maxCardsOnXs = 3;
    const classes = useStyles({});
    const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
    return (
        <Container className={classes.container} id={data.id}>
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
            <Container className={classes.cardContainer}>
                {data.cards.map(
                    (card, index) =>
                        (index < maxCardsOnXs || !isXs) && (
                            <ImgMediaCard {...card} key={card.title} />
                        )
                )}
            </Container>
        </Container>
    );
};

export default LatestWork;
