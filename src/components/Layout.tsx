import CssBaseline from "@material-ui/core/CssBaseline";
import * as React from "react";
import BackgroundImg from "./BackgroundImg";
import Footer from "./Footer";
import Header from "./Header";
import HeroUnit from "./HeroUnit";

const Layout: React.FunctionComponent = props => (
    <>
        <CssBaseline />
        <BackgroundImg>
            <Header />
            <HeroUnit />
        </BackgroundImg>
        {props.children}
        <Footer />
    </>
);

export default Layout;
