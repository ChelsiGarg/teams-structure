import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#556B2F", // olive green
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#6B8E23", // olive drab (lighter olive)
        },
    },
});

export default theme;