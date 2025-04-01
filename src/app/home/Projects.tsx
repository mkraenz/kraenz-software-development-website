"use client";

import { content } from "@/content";
import { useInView } from "@/hooks/useInView";
import { Grid, Heading, VStack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const Projects = () => {
  const headingInView = useInView(0.75);

  const fadeProps = useFadeInOnScroll(headingInView.inView);

  return (
    <VStack
      gap={16}
      pb={16}
      id={content.latestWork.id}
      minH={"100svh"}
      as={"section"}
    >
      <Heading
        as={"h2"}
        size={{ base: "5xl", md: "7xl" }}
        textAlign={"center"}
        ref={headingInView.ref}
        {...fadeProps}
      >
        {content.latestWork.title}
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={8}
        className={"project-grid"}
      >
        {content.latestWork.cards.map((p) => (
          <ProjectCard project={p} key={p.title} />
        ))}
      </Grid>
      {/* TODO on mobile allow to show more */}
      {/* <Button onClick={showMore}>Show more</Button> */}
    </VStack>
  );
};

export default Projects;
