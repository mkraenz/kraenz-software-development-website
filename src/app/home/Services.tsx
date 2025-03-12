"use client";

import { content } from "@/content";
import { useInView } from "@/hooks/useInView";
import { Badge, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const Services = () => {
  const servicesInView = useInView(0.25);
  const techsInView = useInView(0.25);
  return (
    <VStack
      as={"article"}
      gap={16}
      minH={"100svh"}
      maxW={{ base: "100%", md: "70%" }}
      id={content.services.id}
      pb={16}
    >
      <VStack
        as={"section"}
        ref={servicesInView.ref}
        className={"slide-up"}
        data-animated={servicesInView.inView}
      >
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

      <VStack
        as={"section"}
        ref={techsInView.ref}
        className={"slide-up"}
        data-animated={techsInView.inView}
      >
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
