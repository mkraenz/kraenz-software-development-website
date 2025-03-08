import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { content } from "../../content";

const HeroBanner = () => {
  return (
    <VStack gap={16} minH={"100svh"} justify={"center"} as={"article"}>
      <VStack>
        <Heading as={"h1"} size={"7xl"} textAlign={"center"}>
          {content.heading}
        </Heading>
        <Heading as={"h2"} textAlign={"center"}>
          {content.subHeading}
        </Heading>
        <Heading as={"h3"} textAlign={"center"}>
          {content.subsubHeading}
        </Heading>
      </VStack>
      <HStack gap={8}>
        <Button
          textTransform={"uppercase"}
          fontWeight={"bold"}
          variant={"outline"}
          asChild
        >
          <Link href={content.nav.contact.href}>{content.contact.title}</Link>
        </Button>
        <Link
          target={"_blank"}
          referrerPolicy={"no-referrer"}
          href={content.nav.linkedin.href}
        >
          <Button textTransform={"uppercase"} fontWeight={"bold"}>
            {content.landingPageSecondaryButton}
          </Button>
        </Link>
      </HStack>
    </VStack>
  );
};

export default HeroBanner;
