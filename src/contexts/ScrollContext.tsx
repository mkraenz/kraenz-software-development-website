"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

type ScrollDirection = "up" | "down";

interface ScrollContextType {
  scrollDirection: ScrollDirection;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollDirection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollDirection = (): ScrollDirection => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollDirection must be used within a ScrollProvider");
  }
  return context.scrollDirection;
};
