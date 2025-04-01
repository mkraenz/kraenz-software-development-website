"use client";

import { content } from "@/content";
import { useInView } from "@/hooks/useInView";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";
import { Button, Heading, VStack } from "@chakra-ui/react";
import Link from "next/link";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const headingInView = useInView(0.75);
  const buttonInView = useInView(0.75);

  const fadePropsHeading = useFadeInOnScroll(headingInView.inView);
  const fadePropsButton = useFadeInOnScroll(buttonInView.inView);

  return (
    <VStack
      gap={16}
      pb={16}
      id={content.testimonials.id}
      minH={"100svh"}
      as={"section"}
    >
      <Heading
        as={"h2"}
        size={{ base: "5xl", md: "7xl" }}
        textAlign={"center"}
        ref={headingInView.ref}
        {...fadePropsHeading}
      >
        {content.testimonials.title}
      </Heading>
      <VStack gap={16}>
        {/* Desktop */}
        {content.testimonials.cards.map((t, i) => (
          <TestimonialCard testimonial={t} index={i} key={t.name} gap={16} />
        ))}
      </VStack>
      <Button
        asChild
        textTransform={"uppercase"}
        fontWeight={"bold"}
        variant={"outline"}
        minW={{ md: 180, base: "full" }}
        ref={buttonInView.ref}
        {...fadePropsButton}
      >
        <Link
          href={content.testimonials.linkedInRecommendations.href}
          target={"_blank"}
          referrerPolicy={"no-referrer"}
        >
          {content.testimonials.linkedInRecommendations.label}
        </Link>
      </Button>
    </VStack>
  );
};

export default Testimonials;
