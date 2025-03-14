import { content } from "@/content";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Metadata } from "next";
import Link from "next/link";

const ThankyouPage = () => {
  return (
    <VStack
      gap={8}
      as={"main"}
      px={{ md: 12, base: 4 }}
      mb={16}
      justify={"center"}
    >
      <Heading as={"h1"} size={"5xl"}>
        {content.thankyou.heading}
      </Heading>
      <Text>{content.thankyou.description}</Text>
      <Button
        asChild
        textTransform={"uppercase"}
        fontWeight={"bold"}
        width={{ base: "100%", md: "200px" }}
      >
        <Link href={content.nav.home.href}>
          {content.thankyou.backToHomeButton}
        </Link>
      </Button>
    </VStack>
  );
};

export const metadata: Metadata = {
  title: content.thankyou.meta.title,
  description: content.thankyou.meta.description,
};

export default ThankyouPage;
