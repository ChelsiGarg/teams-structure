import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#556B2F", // dark olive green
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#6B8E23", // olive drab (lighter olive)
            contrastText: "#FFFFFF",
        },
    },
});

export default theme;