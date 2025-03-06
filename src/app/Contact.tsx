import { Grid, Heading, VStack } from "@chakra-ui/react";
import { content } from "../content";
import ContactForm from "./ContactForm";
import ContactMailTo from "./ContactMailTo";

const Contact = () => {
  return (
    <VStack
      gap={8}
      minH={"100svh"}
      maxW={{ base: "100%", md: "70%" }}
      as="article"
      id={content.contact.id}
    >
      <VStack>
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
      >
        <ContactMailTo />
        <ContactForm />
      </Grid>
      <div></div>
    </VStack>
  );
};

export default Contact;
