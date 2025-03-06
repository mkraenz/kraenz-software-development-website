"use client";

import { ColorModeButton } from "@/components/ui/color-mode";
import * as Menu from "@/components/ui/menu";
import { content } from "@/content";
import { HStack, IconButton, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { LuGithub, LuLinkedin, LuMenu, LuX } from "react-icons/lu";
import styles from "./navbar.module.css";

const NavLink: FC<PropsWithChildren<{ href: string }>> = ({
  children,
  href,
}) => {
  return (
    <Link href={href}>
      <p>{children}</p>
    </Link>
  );
};

const iconLookup = {
  github: LuGithub,
  linkedin: LuLinkedin,
};

const NavLinkIcon: FC<{ icon: keyof typeof iconLookup; href: string }> = ({
  icon,
  href,
}) => {
  const Icon = iconLookup[icon];
  return (
    <IconButton variant={"ghost"} asChild>
      <Link href={href} target={"_blank"} rel={"noreferrer"}>
        <Icon />
      </Link>
    </IconButton>
  );
};

const Navbar = () => {
  const { onToggle, open } = useDisclosure();
  return (
    <HStack as={"nav"} justifyContent={"space-between"} px={4}>
      <Link href={"/"}>
        <Image
          width={108}
          height={36}
          style={{ width: "auto" }}
          alt={content.logo.alt}
          src={content.logo.src}
          className={styles.logo}
        />
      </Link>

      <HStack display={{ base: "none", md: "flex" }}>
        <ColorModeButton />
        <NavLink href={content.nav.projects.href}>
          {content.nav.projects.label}
        </NavLink>
        {/* <NavLink href={content.nav.mission.href}>
          {content.nav.mission.label}
        </NavLink> */}
        <NavLink href={content.nav.services.href}>
          {content.nav.services.label}
        </NavLink>
        <NavLink href={content.nav.contact.href}>
          {content.nav.contact.label}
        </NavLink>
        <NavLinkIcon icon={"github"} href={content.nav.github.href} />
        <NavLinkIcon icon={"linkedin"} href={content.nav.linkedin.href} />
      </HStack>

      <HStack display={{ base: "flex", md: "none" }}>
        <ColorModeButton />
        <Menu.MenuRoot onSelect={onToggle}>
          <Menu.MenuTrigger asChild>
            <IconButton
              aria-label={
                open
                  ? content.nav.hamburger.ariaLabelClose
                  : content.nav.hamburger.ariaLabelOpen
              }
              variant={"outline"}
              onClick={onToggle}
            >
              {open ? <LuX /> : <LuMenu />}
            </IconButton>
          </Menu.MenuTrigger>
          <Menu.MenuContent minW={"100vw"}>
            <Menu.MenuItem value={"1"}>
              <NavLink href={content.nav.projects.href}>
                {content.nav.projects.label}
              </NavLink>
            </Menu.MenuItem>
            <Menu.MenuItem value={"2"}>
              <NavLink href={content.nav.services.href}>
                {content.nav.services.label}
              </NavLink>
            </Menu.MenuItem>
            <Menu.MenuItem value={"3"}>
              <NavLink href={content.nav.mission.href}>
                {content.nav.mission.label}
              </NavLink>
            </Menu.MenuItem>
            <Menu.MenuItem value={"4"}>
              <NavLink href={content.nav.contact.href}>
                {content.nav.contact.label}
              </NavLink>
            </Menu.MenuItem>
            <Menu.MenuItem value={"5"}>
              <NavLink href={content.nav.github.href}>
                {content.nav.github.label}
              </NavLink>
            </Menu.MenuItem>
            <Menu.MenuItem value={"6"}>
              <NavLink href={content.nav.linkedin.href}>
                {content.nav.linkedin.label}
              </NavLink>
            </Menu.MenuItem>
          </Menu.MenuContent>
        </Menu.MenuRoot>
      </HStack>
    </HStack>
  );
};

export default Navbar;
