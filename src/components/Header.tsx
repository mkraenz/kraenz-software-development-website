import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import React from "react";
import { content } from "../content";

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
    logo: {
        maxHeight: 35,
    },
}));

const data = [content.latestWork, content.services, content.contact];

const Logo = () => {
    const classes = useStyles({});
    return (
        <Link color="textPrimary" href="/">
            <img className={classes.logo} alt="Logo" src={content.logo} />
        </Link>
    );
};

const Header: React.FunctionComponent = () => {
    const classes = useStyles({});
    const isXs = useMediaQuery(theme =>
        (theme as Theme).breakpoints.down("xs")
    );
    const isIndexPage = process.browser && window.location.pathname === "/";
    const handleClick = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        document.getElementById(event.currentTarget.innerHTML)!.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
        });
    };
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
        >
            <Container maxWidth="md">
                <Toolbar className={classes.toolbar}>
                    {!isXs && (
                        <>
                            <Grid item>
                                <Logo />
                            </Grid>
                            {/* empty grid with xs to use-up the space in-between logo and nav */}
                            <Grid item xs />
                        </>
                    )}
                    <Grid item>
                        <nav>
                            {isIndexPage &&
                                data.map(date => (
                                    <Link
                                        key={date.id}
                                        variant="button"
                                        color="textPrimary"
                                        onClick={handleClick}
                                        className={classes.link}
                                    >
                                        {date.id}
                                    </Link>
                                ))}
                        </nav>
                    </Grid>
                    <Grid item>
                        <IconButton href={content.urls.github}>
                            <GitHubIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton href={content.urls.linkedIn}>
                            <LinkedIn />
                        </IconButton>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
