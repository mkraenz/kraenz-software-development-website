import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import * as emailjs from "emailjs-com";
import React, { useState } from "react";
import { CONFIG, IEmailJSTemplate } from "../api/config";
import SimpleSnackbar from "./SimpleSnackbar";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const isValidEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
const ContactForm = () => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [sendSuccess, setSendSuccess] = React.useState(false);

    const ensureFilledForm = () => {
        if(nameError || !name){
            document.getElementById("contact-name")?.focus()
            return false;
        }
        if(emailError || !email){
            document.getElementById("contact-email")?.focus()
            return false;
        }
        if(messageError || !message){
            document.getElementById("contact-message")?.focus()
            return false;
        }
        return true;
    }
    const handleSubmit = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault()
        const isFilled = ensureFilledForm();
        if(isFilled){
            const sendSuccessful = await sendEmail(event, name, email, message);
            setSendSuccess(sendSuccessful);
            setOpen(true);
        }
    };
    const handleNameChanged = ({ target: { value } }: ChangeEvent) => {
        setName(value);
        // name is 1 char behind thus use value instead
        setNameError(!value);
    };
    const handleEmailChanged = ({ target: { value } }: ChangeEvent) => {
        setEmail(value);
        // email is 1 char behind thus use value instead
        setEmailError(!isValidEmail(value));
    };
    const handleMessageChanged = ({ target: { value } }: ChangeEvent) => {
        setMessage(value);
        // message is 1 char behind thus use value instead
        setMessageError(!value);
    };

    const commonProps = {
        variant: "outlined" as const,
        margin: "normal" as const,
        required: true,
        fullWidth: true,
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <TextField
                        {...commonProps}
                        id="contact-name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        value={name}
                        onChange={handleNameChanged}
                        error={nameError}
                    />
                    <TextField
                        {...commonProps}
                        id="contact-email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={handleEmailChanged}
                        error={emailError}
                    />
                    <TextField
                        {...commonProps}
                        multiline
                        id="contact-message"
                        label="Message"
                        rows="4"
                        autoComplete="off"
                        value={message}
                        onChange={handleMessageChanged}
                        error={messageError}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Send
                    </Button>
                </form>
            </div>
            <SimpleSnackbar
                open={open}
                onClose={() => setOpen(false)}
                variant={sendSuccess ? "success" : "error"}
            />
        </Container>
    );
};

export default ContactForm;

const sendEmail = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string,
    email: string,
    message: string
) => {
    event.preventDefault();
    const serviceId = CONFIG.emailJs.serviceId;
    const templateId = CONFIG.emailJs.templateId;
    const userId = CONFIG.emailJs.userId;
    const templateParams: IEmailJSTemplate = { name, email, message };
    try {
        await emailjs.init(userId);
        const response = await emailjs.send(
            serviceId,
            templateId,
            templateParams
        );
        return response.status === 200;
    } catch (err) {
        console.log("email sending failed", err, err.message);
        return false;
    }
};
