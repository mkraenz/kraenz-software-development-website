import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "next/app";
import Head from "next/head";
import React from "react";
import ReactGA from "react-ga";
import { CONFIG } from "../src/api/config";
import { content } from "../src/content";
import { isProductionBrowser } from "../src/isProductionBrowser";
import theme from "../src/theme";

class MyApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
        initGoogleAnalytics();
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title>{content.subtitle}</title>
                    <meta name="author" content={content.myName} />
                    <meta
                        name="description"
                        content={content.meta.description}
                    />
                    <meta name="keywords" content={content.meta.keywords} />
                    {process.browser && (
                        <script type="text/javascript" id="hotjar">
                            {/* {initHotjar() as any} */}
                        </script>
                    )}
                </Head>
                    <ThemeProvider theme={theme}>
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        <Component {...pageProps} />
                    </ThemeProvider>
            </React.Fragment>
        );
    }
}

export default MyApp;

const initGoogleAnalytics = () => {
    if (isProductionBrowser) {
        ReactGA.set({ anonymizeIp: true });
        ReactGA.initialize(CONFIG.googleAnalyticsId);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
};
