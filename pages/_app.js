import '../styles/globals.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import theme from "../src/General/theme"
import Navbar from "../src/Components/Navbar/Navbar"

function MyApp({ Component, pageProps }) {
      return (
        <ThemeProvider theme={theme}>
              <Navbar />
             <Component {...pageProps} />
        </ThemeProvider>
        )
}

export default MyApp
