import { content } from "@/content";
import { VStack } from "@chakra-ui/react";
import ServiceOffer from "./(services)/ServiceOffer";
import Technologies from "./(services)/Technologies";

const Services = () => {
  return (
    <VStack
      gap={16}
      minH={"100svh"}
      maxW={{ base: "100%", md: "5xl" }}
      id={content.services.id}
      pb={16}
    >
      <ServiceOffer />
      <Technologies />
    </VStack>
  );
};

export default Services;
