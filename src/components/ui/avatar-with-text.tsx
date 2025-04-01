import { Avatar } from "@/components/ui/avatar";
import { content } from "@/content";
import { StackProps, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  testimonial: (typeof content.testimonials.cards)[number];
  flexDir?: StackProps["flexDir"];
};

const AvatarWithText: FC<Props> = ({ testimonial, flexDir }) => {
  return (
    <VStack as={"figure"} flexDir={flexDir} gapX={4}>
      <Avatar
        name={testimonial.name}
        src={testimonial.img.src}
        alt={testimonial.img.alt}
        size={"2xl"}
      ></Avatar>
      <Text as={"figcaption"} textAlign={"center"}>
        {testimonial.name}
        <br />
        <Text color={"dimgray"}>
          {testimonial.role} / {testimonial.company}
        </Text>
      </Text>
    </VStack>
  );
};

export default AvatarWithText;
