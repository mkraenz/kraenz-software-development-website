import { lightGreen } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

enum Color {
    White = "#fff",
    DarkGreen = "#5a9216",
    LightGreen = "#bef67a",
}

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            light: Color.LightGreen,
            main: lightGreen[500],
            dark: Color.DarkGreen,
        },
        secondary: {
            main: "#f50057",
        },
        text: {
            primary: "rgb(0, 0, 0, 0.6)",
        },
        background: {
            default: Color.White,
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
