"use client";

import { content } from "@/content";
import { useInView } from "@/hooks/useInView";
import { Card, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const ProjectCard: FC<{
  project: (typeof content.latestWork.cards)[number];
}> = ({ project }) => {
  const { ref, inView } = useInView(0.5);

  return (
    <Link
      href={project.externalLink}
      key={project.title}
      className={"project-grid-item slide-up"}
      target={"_blank"}
      rel={"noopener noreferrer"}
      data-animated={inView}
      ref={ref}
    >
      <Card.Root
        variant={"elevated"}
        maxW={"20rem"}
        display={"grid"}
        gridTemplateRows={"140px 264px"}
        pt={4}
        transition={"0.3s"}
        _hover={{ scale: 1.1 }}
      >
        <Card.Header position={"relative"} mx={4}>
          <Image
            // nextjs sets position: absolute
            src={project.imgPath}
            alt={project.imgAlt}
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
            fill
            className={"project-card-image"}
            data-invert-color-filter={project.imgFilterIfDarkMode}
            sizes={"(max-width: 768px) 100vw, 33vw"}
          />
        </Card.Header>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <VStack gap={4} alignItems={"start"}>
            <Card.Description>{project.description}</Card.Description>
            <Card.Description>
              {content.latestWork.role}
              {project.role}
            </Card.Description>
            <Card.Description>
              {content.latestWork.teamsize}
              {project.teamSize}
            </Card.Description>
          </VStack>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};

export default ProjectCard;
