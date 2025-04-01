import { content } from "@/content";
import { VStack } from "@chakra-ui/react";
import { Metadata } from "next";
import Contact from "./home/Contact";
import HeroBanner from "./home/HeroBanner";
import Projects from "./home/Projects";
import Services from "./home/Services";
import Testimonials from "./home/Testimonial";
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
      <VStack as={"main"} px={{ md: 12, base: 4 }}>
        <HeroBanner />
        <Services />
        <Testimonials />
        <Projects />
        <Contact />
      </VStack>
    </>
  );
};

export default HomePage;
