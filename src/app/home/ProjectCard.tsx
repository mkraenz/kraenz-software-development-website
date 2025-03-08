import { Card, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { content } from "../../content";

const ProjectCard: FC<{
  project: (typeof content.latestWork.cards)[number];
}> = ({ project }) => {
  return (
    <Link
      href={project.externalLink}
      key={project.title}
      className={"project-grid-item"}
      target={"_blank"}
      rel={"noopener noreferrer"}
    >
      <Card.Root
        variant={"elevated"}
        maxW={"20rem"}
        display={"grid"}
        gridTemplateRows={"140px 264px"}
        pt={4}
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
