import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ContactForm from "./ContactForm";

const useStyles = makeStyles(theme => ({
    cardHeader: {
        backgroundColor:
            theme.palette.type === "dark"
                ? theme.palette.grey[700]
                : theme.palette.grey[200],
    },
    container: {
        marginTop: theme.spacing(15),
    },
}));

const Contact: React.FunctionComponent = () => {
    const classes = useStyles({});

    return (
        <Container maxWidth="md" component="main" className={classes.container}>
            <Card>
                <CardHeader
                    title="Contact"
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{
                        align: "center",
                    }}
                    subheader="software@kraenz.com"
                    className={classes.cardHeader}
                />
                <CardContent>
                    <Typography align="center">
                        Please send us any questions or requests. We look foward
                        to hearing from you.
                    </Typography>
                    <ContactForm />
                </CardContent>
            </Card>
        </Container>
    );
};

export default Contact;
