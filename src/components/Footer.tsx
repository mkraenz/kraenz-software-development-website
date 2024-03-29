import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { FC } from "react";
import { content } from "../content";
import Copyright from "./Copyright";

const useStyles = makeStyles(theme => ({
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

const Footer: FC = () => {
    const classes = useStyles({});
    const footers = content.footers;

    return (
        <Container maxWidth="md" component="footer" className={classes.footer}>
            <Grid container spacing={4} justifyContent="space-evenly">
                {footers.map(footer => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            gutterBottom
                        >
                            {footer.title}
                        </Typography>
                        <ul>
                            {footer.description.map(item => (
                                <li key={item.title}>
                                    <Link
                                        href={item.href}
                                        variant="subtitle1"
                                        color="textSecondary"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                ))}
            </Grid>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
};

export default Footer;
