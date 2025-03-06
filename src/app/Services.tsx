import { Badge, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { content } from "../content";

const Services = () => {
  return (
    <VStack
      as={"article"}
      gap={16}
      minH={"100svh"}
      maxW={{ base: "100%", md: "70%" }}
      id={content.services.id}
      pb={16}
    >
      <VStack as={"section"}>
        <Heading
          as={"h2"}
          size={{ base: "5xl", md: "7xl" }}
          textAlign={"center"}
          width={"100%"}
        >
          {content.services.title}
        </Heading>
        <Heading as={"h3"} textAlign={"center"} width={"100%"}>
          {content.services.subheading}
        </Heading>
        <VStack align={"start"}>
          <Text>{content.services.description}</Text>
          <Text>{content.services.description2}</Text>
          <Text>{content.services.description3}</Text>
          <Text>{content.services.cta}</Text>
        </VStack>
        <Button
          variant={"solid"}
          textTransform={"uppercase"}
          fontWeight={"bold"}
          width={{ base: "100%", md: "200px" }}
          asChild
          mt={8}
        >
          <Link href={content.nav.contact.href}>
            {content.services.ctaButtonLabel}
          </Link>
        </Button>
      </VStack>

      <VStack as={"section"}>
        <Heading as={"h4"} size={"3xl"}>
          {content.services.technologies.heading}
        </Heading>
        <Text>{content.services.technologies.label}</Text>
        {/* TODO turn this into a searchable grid with icons and tags somewhat similar to https://react-icons.github.io/react-icons/icons/ai/ and quick filters  */}
        <Flex wrap={"wrap"} gap={2}>
          {content.services.technologies.techs.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </Flex>
      </VStack>
    </VStack>
  );
};

export default Services;
