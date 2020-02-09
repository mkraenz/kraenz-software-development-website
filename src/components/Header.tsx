import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import React from "react";

const useStyles = makeStyles(theme => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        height: "56px",
        backgroundColor: theme.palette.primary.main,
    },
    toolbar: {
        justifyContent: "space-evenly",
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(0, 1),
    },
}));

const title = "Kraenz Software Development";
const data = [
    { href: "#Skills", title: "Skills" },
    { href: "#Contact", title: "Contact" },
];
const externalLinks = {
    github: "https://github.com/proSingularity/",
    linkedIn: "https://www.linkedin.com/in/mirco-kraenz/",
};

const Header: React.FunctionComponent = () => {
    const classes = useStyles({});
    const isXs = useMediaQuery(theme =>
        (theme as Theme).breakpoints.down("xs")
    );
    if (isXs) {
        return (
            <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}
            >
                <Container maxWidth="md">
                    <Toolbar className={classes.toolbar} disableGutters>
                        <nav>
                            {data.map(date => (
                                <Link
                                    key={date.title}
                                    variant="button"
                                    color="textPrimary"
                                    href={date.href}
                                    className={classes.link}
                                >
                                    {date.title}
                                </Link>
                            ))}
                        </nav>
                        <IconButton
                            href={externalLinks.github}
                            className={classes.link}
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            href={externalLinks.linkedIn}
                            className={classes.link}
                        >
                            <LinkedIn />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        );
    }
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
        >
            <Container maxWidth="md">
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        <Link color="textPrimary" href="/">
                            {title}
                        </Link>
                    </Typography>
                    <nav>
                        {data.map(date => (
                            <Link
                                key={date.title}
                                variant="button"
                                color="textPrimary"
                                href={date.href}
                                className={classes.link}
                            >
                                {date.title}
                            </Link>
                        ))}
                    </nav>
                    <IconButton
                        href={externalLinks.github}
                        className={classes.link}
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        href={externalLinks.linkedIn}
                        className={classes.link}
                    >
                        <LinkedIn />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
