import { Grid, VStack } from "@chakra-ui/react";
import { Metadata } from "next";
import { content } from "../content";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import Contact from "./home/Contact";
import HeroBanner from "./home/HeroBanner";
import Projects from "./home/Projects";
import Services from "./home/Services";
import SeoSchemaMarkup from "./SchemaMarkup";

export const metadata: Metadata = {
  alternates: {
    canonical: content.meta.homeCanonicalTag,
  },
};

const HomePage = () => {
  return (
    <>
      <SeoSchemaMarkup />
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
