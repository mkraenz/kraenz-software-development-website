"use client";

import AvatarWithText from "@/components/ui/avatar-with-text";
import { content } from "@/content";
import { useInView } from "@/hooks/useInView";
import { HStack, Separator, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  testamonial: (typeof content.testamonials.cards)[number];
  index: number;
  gap: number;
};

const TestamonialCard: FC<Props> = ({ testamonial, index, gap }) => {
  const { ref, inView } = useInView(0.5);
  const even = index % 2 === 0;

  return (
    <VStack ref={ref} data-animated={inView} className={"slide-up"} gap={gap}>
      {index !== 0 && (
        <Separator
          variant={"solid"}
          color={"red"}
          size={"lg"}
          width={"full"}
          rotate={!even ? "4deg" : "-4deg"}
        />
      )}
      <HStack
        wrap={"wrap"}
        gapX={16}
        gapY={4}
        flexDir={even ? "row" : "row-reverse"}
      >
        <AvatarWithText
          testamonial={testamonial}
          flexDir={{ md: "column", base: even ? "row" : "row-reverse" }}
        />
        <Text
          as={"blockquote"}
          maxW={"xl"}
          dangerouslySetInnerHTML={{ __html: testamonial.quote }}
        ></Text>
      </HStack>
    </VStack>
  );
};

export default TestamonialCard;
