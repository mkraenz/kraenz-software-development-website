import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
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
        marginBottom: theme.spacing(4),
    },
    cardContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    paragraph: {
        marginBottom: theme.spacing(2),
    },
    strengths: {
        marginTop: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    checkIcon: { color: theme.palette.primary.main },
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
            <Typography
                component="h4"
                variant="h5"
                align="center"
                color="textPrimary"
                gutterBottom
                className={classes.title}
            >
                {data.subheader}
            </Typography>
            <Typography component="p" className={classes.paragraph}>
                {data.description}
            </Typography>
            <Typography component="p" className={classes.paragraph}>
                {data.description2}
            </Typography>
            <div className={classes.strengths}>
                <Typography component="h5" variant="h5">
                    Strengths
                </Typography>
                <List>
                    {data.strengths.map(strength => (
                        <ListItemLink
                            button
                            href={strength.link}
                            key={strength.name}
                        >
                            <ListItemIcon>
                                <CheckIcon className={classes.checkIcon} />
                            </ListItemIcon>
                            <ListItemText>{strength.name}</ListItemText>
                        </ListItemLink>
                    ))}
                </List>
            </div>
        </Container>
    );
};

const ListItemLink = (props: ListItemProps<"a", { button?: true }>) => (
    <ListItem button component="a" {...props} />
);

export default Services;
