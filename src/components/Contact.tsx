import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { FC } from "react";
import { content } from "../content";
import ContactForm from "./ContactForm";

const useStyles = makeStyles(theme => ({
    cardHeader: {
        backgroundColor: theme.palette.primary.main,
    },
    container: {
        marginTop: theme.spacing(16),
    },
    mailToSubheader: {
        color: theme.palette.text.primary,
    },
}));

const Contact: FC = () => {
    const classes = useStyles({});

    return (
        <Container
            maxWidth="md"
            className={classes.container}
            id={content.contact.id}
        >
            <Card>
                <CardHeader
                    title={content.contact.title}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{
                        align: "center",
                    }}
                    subheader={
                        <a
                            href={`mailto:${content.email}`}
                            className={classes.mailToSubheader}
                        >
                            {content.email}
                        </a>
                    }
                    className={`${classes.cardHeader} MuiPaper-elevation3`}
                />
                <CardContent>
                    <Typography align="center">
                        {content.contact.subheader}
                    </Typography>
                    <ContactForm />
                </CardContent>
            </Card>
        </Container>
    );
};

export default Contact;
