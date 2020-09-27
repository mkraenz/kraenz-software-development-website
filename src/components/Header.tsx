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
import HeaderMenu from "./HeaderMenu";

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
        cursor: "pointer",
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

const scrollTo = (htmlElementId: string) => () => {
    document.getElementById(htmlElementId)!.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
    });
};

const Navigation: React.FunctionComponent<{ showMainPageNav: boolean }> = ({
    showMainPageNav,
}) => {
    const classes = useStyles({});
    return (
        <>
            <Grid item>
                <nav>
                    {showMainPageNav &&
                        data.map(date => (
                            <Link
                                key={date.id}
                                variant="button"
                                color="textPrimary"
                                onClick={scrollTo(date.id)}
                                className={classes.link}
                            >
                                {date.id}
                            </Link>
                        ))}
                </nav>
            </Grid>
            <Grid item>
                <IconButton href={content.urls.github} target="_blank">
                    <GitHubIcon />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton href={content.urls.linkedIn} target="_blank">
                    <LinkedIn />
                </IconButton>
            </Grid>
        </>
    );
};

const Header: React.FunctionComponent = () => {
    const classes = useStyles({});
    const onMobile = useMediaQuery(theme =>
        (theme as Theme).breakpoints.down("xs")
    );
    const isIndexPage = process.browser && window.location.pathname === "/";

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
        >
            <Container maxWidth="md">
                <Toolbar className={classes.toolbar}>
                    <Grid item>
                        <Logo />
                    </Grid>
                    {/* empty grid with xs to use-up the space in-between logo and nav */}
                    <Grid item xs />
                    {onMobile ? (
                        <HeaderMenu
                            menuItems={data}
                            showMenuButton={isIndexPage}
                        />
                    ) : (
                        <Navigation showMainPageNav={isIndexPage} />
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
