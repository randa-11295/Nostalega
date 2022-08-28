import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "ltr",
  typography: {
    fontFamily: "Noto Naskh Arabic",
  },

  palette: {
    background: {
      default: "#151515",
    },
    text: {
      primary: "#ffffff",
    },

    // smooth red
    primary: {
      main: "#d15050",
      contrastText: "#f3f3f3",
    },
    //   creamy
    secondary: {
      main: "#f3f3f3",
      contrastText: "#000",
    },
    error: {
      main: "#d15050",
      contrastText: "#f3f3f3",
    },
  },
});

export default theme;
