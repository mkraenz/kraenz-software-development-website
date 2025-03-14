import { content } from "@/content";
import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <VStack
      gap={16}
      minH={"100svh"}
      justify={"center"}
      as={"article"}
      className={"hero-animation-durations"}
    >
      <VStack>
        <Heading
          as={"h1"}
          size={"7xl"}
          textAlign={"center"}
          className={"hero-h1"}
          data-animated
        >
          {content.heading}
        </Heading>
        <Heading
          as={"h2"}
          textAlign={"center"}
          className={"hero-h2"}
          data-animated
        >
          {content.subHeading}
        </Heading>
        <Heading
          as={"h3"}
          textAlign={"center"}
          className={"hero-h3"}
          data-animated
        >
          {content.subsubHeading}
        </Heading>
      </VStack>
      <HStack
        gap={8}
        className={"hero-rest"}
        flexWrap={"wrap"}
        data-animated
        justify={"center"}
      >
        <Button
          textTransform={"uppercase"}
          fontWeight={"bold"}
          variant={"outline"}
          minW={{ md: 120, base: "full" }}
          asChild
        >
          <Link
            target={"_blank"}
            referrerPolicy={"no-referrer"}
            href={content.nav.linkedin.href}
          >
            {content.landingPageSecondaryButton}
          </Link>
        </Button>
        <Button
          textTransform={"uppercase"}
          fontWeight={"bold"}
          minW={{ md: 180, base: "full" }}
          asChild
        >
          <Link href={content.nav.contact.href}>{content.contact.title}</Link>
        </Button>
      </HStack>
    </VStack>
  );
};

export default HeroBanner;
