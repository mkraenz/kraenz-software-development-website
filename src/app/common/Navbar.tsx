"use client";

import { ColorModeButton } from "@/components/ui/color-mode";
import * as Menu from "@/components/ui/menu";
import { content } from "@/content";
import { HStack, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { LuGithub, LuLinkedin, LuMenu, LuX } from "react-icons/lu";
import styles from "./navbar.module.css";

const NavLink: FC<PropsWithChildren<{ href: string; external?: boolean }>> = ({
  children,
  href,
  external = false,
}) => {
  if (external) {
    return (
      <Link href={href} target={"_blank"} referrerPolicy={"no-referrer"}>
        <Text width={"100%"}>{children}</Text>
      </Link>
    );
  }
  return (
    <Link href={href}>
      <Text width={"100%"}>{children}</Text>
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

const Navbar: FC<{ home?: boolean }> = ({ home = true }) => {
  const { onToggle, open, onClose } = useDisclosure();
  const internalLinks = home
    ? [
        content.nav.projects,
        // content.nav.mission,
        content.nav.services,
        content.nav.contact,
      ]
    : [content.nav.home];

  return (
    <HStack
      as={"nav"}
      justifyContent={"space-between"}
      px={4}
      className={"hero-animation-durations hero-rest"}
      data-animated={home}
    >
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
        {internalLinks.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
        <NavLinkIcon icon={"github"} href={content.nav.github.href} />
        <NavLinkIcon icon={"linkedin"} href={content.nav.linkedin.href} />
      </HStack>

      <HStack display={{ base: "flex", md: "none" }}>
        <ColorModeButton />
        <Menu.MenuRoot onSelect={onToggle} onExitComplete={onClose}>
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
            {internalLinks.map((link) => (
              <Menu.MenuItem value={link.href} key={link.href} asChild>
                <Link href={link.href}>
                  <Text>{link.label}</Text>
                </Link>
              </Menu.MenuItem>
            ))}
            <Menu.MenuItem value={content.nav.github.href} asChild>
              <Link
                href={content.nav.linkedin.href}
                target={"_blank"}
                referrerPolicy={"no-referrer"}
              >
                <Text>{content.nav.github.label}</Text>
              </Link>
            </Menu.MenuItem>
            <Menu.MenuItem value={content.nav.linkedin.href} asChild>
              <Link
                href={content.nav.linkedin.href}
                target={"_blank"}
                referrerPolicy={"no-referrer"}
              >
                <Text>{content.nav.linkedin.label}</Text>
              </Link>
            </Menu.MenuItem>
          </Menu.MenuContent>
        </Menu.MenuRoot>
      </HStack>
    </HStack>
  );
};

export default Navbar;
