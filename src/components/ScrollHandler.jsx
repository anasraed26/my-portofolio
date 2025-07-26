import { useEffect } from "react";

export default function ScrollHandler({ setBubbleText }) {
  useEffect(() => {
    const cube = document.querySelector(".cube-wrapper")
    const bubble = document.querySelector(".speech-bubble-2")
    const bldSection = document.getElementById("bld")
    const heroSection = document.getElementById("hero")

    const scrollThreshold = heroSection.offsetHeight * 0.6

    const handleScroll = () => {
      const scrollY = window.scrollY

      if (scrollY > scrollThreshold) {
        window.scrollTo({
          top: bldSection.offsetTop - 50,
          behavior: "smooth",
        });

        cube?.classList.add("cube-float-down");
        bubble?.classList.add("bubble-float-down");

        setBubbleText("Choose from the options below!");
        setTimeout(() => {setBubbleText("First lets typeout the brand name.")}, 3000)
        setTimeout(() => {setBubbleText("Then you can choose light or dark")}, 7000)
        setTimeout(() => {setBubbleText("mobile or desktop. You get it ;)")}, 10000)
        setTimeout(() => {setBubbleText("Once done contact me to Build it Fr!")}, 15000)

        window.removeEventListener("scroll", handleScroll)
      }
    };

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [setBubbleText]);

  return null;
}
