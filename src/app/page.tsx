import { Grid, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { content } from "../content";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import Contact from "./home/Contact";
import HeroBanner from "./home/HeroBanner";
import Projects from "./home/Projects";
import Services from "./home/Services";

const HomePage = () => {
  return (
    <>
      <Head>
        <link
          rel={"canonical"}
          href={content.meta.homeCanonicalTag}
          key={"canonical"}
        />
      </Head>

      <Grid
        templateRows={"var(--navbar-height) min-content min-content"}
        pb={4}
      >
        <Navbar />
        <VStack as={"main"} px={{ md: 12, base: 4 }}>
          <HeroBanner />
          <Projects />
          <Services />
          <Contact />
        </VStack>
        <Footer />
      </Grid>
    </>
  );
};

export default HomePage;
