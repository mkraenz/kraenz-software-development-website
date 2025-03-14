"use client";

import { content } from "@/content";
import { useInView } from "@/hooks/useInView";
import { Button, Heading, VStack } from "@chakra-ui/react";
import Link from "next/link";
import TestamonialCard from "./TestamonialCard";

const Testamonials = () => {
  const headingInView = useInView(0.75);
  const buttonInView = useInView(0.75);
  return (
    <VStack
      gap={16}
      pb={16}
      id={content.testamonials.id}
      minH={"100svh"}
      as={"section"}
    >
      <Heading
        as={"h2"}
        size={{ base: "5xl", md: "7xl" }}
        textAlign={"center"}
        ref={headingInView.ref}
        className={"slide-up"}
        data-animated={headingInView.inView}
      >
        {content.testamonials.title}
      </Heading>
      <VStack gap={16}>
        {/* Desktop */}
        {content.testamonials.cards.map((t, i) => (
          <TestamonialCard testamonial={t} index={i} key={t.name} gap={16} />
        ))}
      </VStack>
      <Button
        asChild
        textTransform={"uppercase"}
        fontWeight={"bold"}
        variant={"outline"}
        minW={{ md: 180, base: "full" }}
        ref={buttonInView.ref}
        data-animated={buttonInView.inView}
        className={"slide-up"}
      >
        <Link
          href={content.testamonials.linkedInRecommendations.href}
          target={"_blank"}
          referrerPolicy={"no-referrer"}
        >
          {content.testamonials.linkedInRecommendations.label}
        </Link>
      </Button>
    </VStack>
  );
};

export default Testamonials;
