"use client";

import Searchbar from "@/components/ui/searchbar";
import { content, TechTag, techTags } from "@/content";
import { useInView } from "@/hooks/useInView";
import {
  Badge,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, useState } from "react";

const tagToColor: Record<TechTag, string> = {
  "3rdparty": "teal",
  backend: "green",
  devops: "purple",
  frontend: "blue",
  mobile: "orange",
};

const Technologies: FC = () => {
  const techsInView = useInView(0.25);
  const [filter, setFilter] = useState<TechTag>();
  const [search, setSearch] = useState("");
  const reset = () => {
    setFilter(undefined);
    setSearch("");
  };
  const allTechs = content.services.technologies.techs2;
  const searchedTechs = allTechs.filter((t) =>
    t.name
      .toLowerCase()
      .replaceAll(".", "")
      .includes(search.toLowerCase().replaceAll(".", "")),
  );
  const techs = filter
    ? searchedTechs.filter((t) => t.tags.includes(filter))
    : searchedTechs;

  const theContent = content.services.technologies;
  return (
    <VStack
      as={"section"}
      ref={techsInView.ref}
      className={"slide-up"}
      data-animated={techsInView.inView}
      gap={8}
    >
      <Heading as={"h4"} size={"3xl"}>
        {theContent.heading}
      </Heading>
      <Text>{theContent.label}</Text>
      {/* TODO turn this into a searchable grid with icons and tags somewhat similar to https://react-icons.github.io/react-icons/icons/ai/ and quick filters  */}
      <HStack wrap={"wrap"}>
        <Flex wrap={"wrap"} gap={4}>
          {techTags.map((tag) => (
            <Button
              key={tag}
              onClick={() =>
                filter === tag ? setFilter(undefined) : setFilter(tag)
              }
              textTransform={"capitalize"}
              variant={filter === tag ? "subtle" : "outline"}
              color={`${tagToColor[tag]}.fg`}
            >
              {theContent.tags[tag]}
            </Button>
          ))}
          <Searchbar
            onChange={(x) => setSearch(x.target.value)}
            onClear={() => setSearch("")}
            value={search}
            placeholder={theContent.search}
            clearAriaLabel={theContent.clearAriaLabel}
          ></Searchbar>
        </Flex>
      </HStack>
      <Flex wrap={"wrap"} gap={{ md: 4, base: 2 }}>
        {techs.map(({ name, tags }) => (
          <Badge
            key={name}
            background={`rgb(from {colors.${tagToColor[tags[0]]}.muted} r g b / 0.7)`}
            transition={"0.3s"}
            _hover={{ transform: "scale(1.1)" }}
            userSelect={"all"}
          >
            {name}
          </Badge>
        ))}
        {techs.length === 0 && (
          <VStack>
            <Text>{theContent.noSearchResults}</Text>
            <Button variant={"outline"} onClick={reset} minW={120}>
              {theContent.resetButton}
            </Button>
          </VStack>
        )}
      </Flex>
    </VStack>
  );
};

export default Technologies;
