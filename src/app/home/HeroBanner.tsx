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
      <HStack gap={8} className={"hero-rest"} data-animated>
        <Button
          textTransform={"uppercase"}
          fontWeight={"bold"}
          variant={"outline"}
          minW={120}
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
          minW={180}
          asChild
        >
          <Link href={content.nav.contact.href}>{content.contact.title}</Link>
        </Button>
      </HStack>
    </VStack>
  );
};

export default HeroBanner;
