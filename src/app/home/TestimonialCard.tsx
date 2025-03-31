"use client";

import AvatarWithText from "@/components/ui/avatar-with-text";
import { content } from "@/content";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";
import { useInView } from "@/hooks/useInView";
import { HStack, Separator, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  testimonial: (typeof content.testimonials.cards)[number];
  index: number;
  gap: number;
};

const TestimonialCard: FC<Props> = ({ testimonial, index, gap }) => {
  const { ref, inView } = useInView(0.5);
  const even = index % 2 === 0;

  const fadeProps = useFadeInOnScroll(inView);

  return (
    <VStack ref={ref} gap={gap} {...fadeProps}>
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
          testimonial={testimonial}
          flexDir={{ md: "column", base: even ? "row" : "row-reverse" }}
        />
        <Text
          as={"blockquote"}
          maxW={"xl"}
          dangerouslySetInnerHTML={{ __html: testimonial.quote }}
        ></Text>
      </HStack>
    </VStack>
  );
};

export default TestimonialCard;
