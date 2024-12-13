import { useCallback } from "react";

const useScrollToSection = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === "header") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const offsetTop =
          element.getBoundingClientRect().top + window.scrollY - 250;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, []);

  return scrollToSection;
};

export default useScrollToSection;
