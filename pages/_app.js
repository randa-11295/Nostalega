import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { prefixer } from "stylis";
import theme from "../src/General/theme";
import Navbar from "../src/Components/Navbar/Navbar";
import Footer from "../src/Components/Footer/Footer";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import LinearProgress from "@mui/material/LinearProgress";
import AppBar from "@mui/material/AppBar";
import client from "../src/ApolloClint/client";
import { ApolloProvider } from "@apollo/client";
import { store } from "../src/Redux/store";
import { Provider } from "react-redux";
import { SnackbarProvider, } from 'notistack';
import { green } from "@mui/material/colors";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // route loader
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
    router.events.on("routeChangeError", () => {
      setLoading(false);
    });
  }, [router]);

  return (
    <ApolloProvider client={client}> 
      <Provider store={store}>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
          
            {loading ? (
              <AppBar sx={{ zIndex: "2000" }}>
                <LinearProgress  sx={{ height: "6px" ,
              
                background : 'var(--lightBlack)'
              
              }} />
              </AppBar>
            ) : null}

            <Navbar />

            <Component {...pageProps} />

            <Footer />
         
          </ThemeProvider>
        </CacheProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
