import { Grid, VStack } from "@chakra-ui/react";
import Contact from "./Contact";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Services from "./Services";

const HomePage = () => {
  return (
    <Grid templateRows={"var(--navbar-height) min-content min-content"} pb={4}>
      <Navbar />
      <VStack as={"main"} px={{ md: 12, base: 4 }}>
        <HeroBanner />
        <Projects />
        <Services />
        <Contact />
      </VStack>
      <Footer />
    </Grid>
  );
};

export default HomePage;
