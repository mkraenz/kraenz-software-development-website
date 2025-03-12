"use client";

import { Grid, Heading, VStack } from "@chakra-ui/react";
import { content } from "../../content";
import { useInView } from "../../hooks/useInView";
import ContactForm from "./ContactForm";
import ContactMailTo from "./ContactMailTo";

const Contact = () => {
  // not sure why but putting inView on the root VStack of this component, I get a double scrollbar when scrolling down to Contact. Moving it to the children of the root VStack fixes this.
  const inView = useInView(0.25);
  return (
    <VStack
      gap={8}
      minH={"100svh"}
      maxW={{ base: "100%", md: "70%" }}
      as={"article"}
      id={content.contact.id}
    >
      <VStack
        ref={inView.ref}
        className={"slide-up"}
        data-animated={inView.inView}
      >
        <Heading
          as={"h2"}
          size={{ base: "5xl", md: "7xl" }}
          textAlign={"center"}
        >
          {content.contact.title}
        </Heading>
        <Heading as={"h3"} textAlign={"center"}>
          {content.contact.subheading}
        </Heading>
      </VStack>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={16}
        ref={inView.ref}
        className={"slide-up"}
        data-animated={inView.inView}
      >
        <ContactMailTo />
        <ContactForm />
      </Grid>
      <div></div>
    </VStack>
  );
};

export default Contact;
