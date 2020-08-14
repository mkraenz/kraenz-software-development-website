import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { content } from "../content";

const useStyles = makeStyles(theme => ({
    menu: {
        "& > *": {
            backgroundColor: theme.palette.primary.main,
        },
    },
}));

interface Props {
    menuItems: { id: string }[];
    showMenuButton: boolean;
}

const HeaderMenu: React.FunctionComponent<Props> = ({
    menuItems,
    showMenuButton,
}) => {
    const classes = useStyles({});
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const scrollTo = (htmlElementId: string) => () => {
        handleClose();
        window.setTimeout(
            () =>
                document.getElementById(htmlElementId)!.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "start",
                }),
            50
        );
    };

    return (
        <>
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
            {showMenuButton && (
                <>
                    <Grid item>
                        <IconButton onClick={openMenu}>
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    <Menu
                        className={classes.menu}
                        id="simple-menu"
                        keepMounted
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {menuItems.map(({ id }) => (
                            <MenuItem onClick={scrollTo(id)} key={id}>
                                {capitalize(id)}
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            )}
        </>
    );
};

const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
};

export default HeaderMenu;
