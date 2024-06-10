import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="LKP SDM" />
        <meta name="keywords" content="LKP, LPK, LPKP, SDM, Sumber, Daya, Manusia, Yogya, Bantul, Sleman" />
        <meta name="google-site-verification" content="-FLX8mH3m9EXmx3W_kfrPtpw_-XUAhcCpDBL1iu3GCI" />
        <title>LKPSDM</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
