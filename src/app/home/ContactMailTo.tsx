import { content } from "@/content";
import { Button, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

const ContactMailTo: FC = () => {
  return (
    <VStack justify={"center"} align={"start"} maxW={"md"}>
      <Text as={"h4"}>{content.contact.mailto.title}</Text>
      <Text fontSize={"sm"} color={"fg.muted"}>
        {content.contact.mailto.description}
      </Text>
      <Button w={{ base: "100%", md: "200px" }} asChild>
        <Link
          href={content.contact.mailto.href}
          target={"_blank"}
          referrerPolicy={"no-referrer"}
        >
          {content.contact.mailto.label}
        </Link>
      </Button>
    </VStack>
  );
};

export default ContactMailTo;
