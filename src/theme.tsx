import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";

enum Color {
    LightBlue = "#D1E8E2",
    DarkBlue = "#116466",
    DarkBlueTransparent = "rgb(17, 100, 102, 0.15)",
    LightBeige = "#FFCB9A",
    DarkBeige = "#D9B08C",
    DarkGrey = "#2C3531",
    DarkGreyTransparent = "rgb(44, 53, 49, 0.3)",
    White = "#fff",
}

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            // main: '#556cd6',
            main: Color.DarkGreyTransparent,
        },
        secondary: {
            main: Color.White,
        },
        error: {
            main: red.A400,
        },
        background: {
            default: Color.White,
        },
        text: {
            primary: grey[400],
            secondary: grey[500],
        },
    },
    typography: {
        h1: {
            fontWeight: "bold",
        },
        h2: {
            fontWeight: "bold",
        },
    },
});

export default theme;
