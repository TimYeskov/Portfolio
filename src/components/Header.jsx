import { useRef, useEffect, useState } from "react";
import lightMode from "../img/light-mode.png";
import darkMode from "../img/dark-mode.png";
const Header = ({ handleDownload, colorTheme, toggleColorTheme }) => {
  const [currentSectionId, setCurrentSectionId] = useState(null);
  const onChangeTheme = () => {
    toggleColorTheme();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSectionId = null;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          currentSectionId = section.getAttribute("id");
          break;
        }
      }

      setCurrentSectionId(currentSectionId);
    };

    const throttle = (func, limit) => {
      let inThrottle;
      return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };

    const throttledScrollHandler = throttle(handleScroll, 200);
    window.addEventListener("scroll", throttledScrollHandler);

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, []);

  const scrollToSection = (sectionId, offset) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        offset: -offset,
      });
    }
  };

  return (
    <header>
      <h4 className="TE">TE.</h4>
      <div>
        <img
          src={colorTheme === "light" ? darkMode : lightMode}
          alt="theme"
          className="theme"
          onClick={onChangeTheme}
        />
        <h4
          className={`${currentSectionId === "services" ? "active" : ""}`}
          onClick={() => scrollToSection("services", 60)}
        >
          Services
        </h4>
        <h4
          className={`${currentSectionId === "skills" ? "active" : ""}`}
          onClick={() => scrollToSection("skills", 60)}
        >
          Skills
        </h4>
        <h4
          className={`${currentSectionId === "projects" ? "active" : ""}`}
          onClick={() => scrollToSection("projects", 60)}
        >
          Projects
        </h4>
        <h4 onClick={handleDownload}>Resume</h4>

        {/* <img src={themeIcon} alt='theme'/> */}
      </div>
    </header>
  );
};
export default Header;
