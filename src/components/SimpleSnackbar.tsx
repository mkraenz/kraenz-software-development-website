import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import ErrorIcon from "@material-ui/icons/Error";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
    close: {
        padding: theme.spacing(0.5),
    },
    success: {
        backgroundColor: theme.palette.primary.dark,
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: "flex",
        alignItems: "center",
    },
}));

const variantIcon = {
    success: CheckCircleIcon,
    error: ErrorIcon,
};
const variantMessage = {
    success: "Sending sucessful. Thank you.",
    error: "An error occured while sending. Please try again later.",
};

export default function SimpleSnackbar(props: {
    open: boolean;
    onClose: () => void;
    variant: "success" | "error";
}) {
    const classes = useStyles();
    const { open, onClose, variant } = props;
    const Icon = variantIcon[variant];
    const message = variantMessage[variant];

    return (
        <Snackbar
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
        >
            <SnackbarContent
                className={clsx(classes[variant])}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={classes.message}>
                        <Icon
                            className={clsx(classes.icon, classes.iconVariant)}
                        />
                        <Typography>{message}</Typography>
                    </span>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        onClick={onClose}
                    >
                        <CloseIcon className={classes.icon} />
                    </IconButton>,
                ]}
            />
        </Snackbar>
    );
}
