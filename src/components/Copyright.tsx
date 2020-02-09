import Typography from "@material-ui/core/Typography";
import { content } from "../content";

export default function Copyright() {
    return (
        <>
            <Typography variant="body2" color="textSecondary" align="center">
                Copyright © {content.myName} {new Date().getFullYear()}.
            </Typography>
        </>
    );
}
