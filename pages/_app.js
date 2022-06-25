import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/General/theme";
import Navbar from "../src/Components/Navbar/Navbar";
import Footer from "../src/Components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
