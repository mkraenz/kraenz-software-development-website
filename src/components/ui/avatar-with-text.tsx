import { Avatar } from "@/components/ui/avatar";
import { content } from "@/content";
import { StackProps, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  testamonial: (typeof content.testamonials.cards)[number];
  flexDir?: StackProps["flexDir"];
};

const AvatarWithText: FC<Props> = ({ testamonial, flexDir }) => {
  return (
    <VStack as={"figure"} flexDir={flexDir} gapX={4}>
      <Avatar
        name={testamonial.name}
        src={testamonial.img.src}
        alt={testamonial.img.alt}
        size={"2xl"}
      ></Avatar>
      <Text as={"figcaption"} textAlign={"center"}>
        {testamonial.name}
        <br />
        <Text color={"dimgray"}>
          {testamonial.role} / {testamonial.company}
        </Text>
      </Text>
    </VStack>
  );
};

export default AvatarWithText;
