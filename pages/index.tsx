import Divider from "@material-ui/core/Divider";
import React from "react";
import Contact from "../src/components/Contact";
import Layout from "../src/components/Layout";
import Skills from "../src/components/LatestWork";

export default function Index() {
    return (
        <Layout>
            <Skills />
            <Divider />
            <Contact />
        </Layout>
    );
}
