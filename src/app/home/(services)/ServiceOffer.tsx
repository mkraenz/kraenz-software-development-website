"use client";

import { content } from "@/content";
import { useInView } from "@/hooks/useInView";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

const ServiceOffer: FC = () => {
  const servicesInView = useInView(0.25);

  return (
    <VStack
      as={"section"}
      ref={servicesInView.ref}
      className={"slide-up"}
      data-animated={servicesInView.inView}
      gap={4}
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
  );
};

export default ServiceOffer;
