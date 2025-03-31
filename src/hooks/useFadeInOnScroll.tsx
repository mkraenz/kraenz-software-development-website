import { useScrollDirection } from "@/contexts/ScrollContext";

export const useFadeInOnScroll = (inView: boolean) => {
  const scrollDirection = useScrollDirection();

  return {
    opacity: scrollDirection === "down" ? undefined : 1,
    className: "slide-up",
    "data-animated": scrollDirection === "down" && inView,
  };
};
