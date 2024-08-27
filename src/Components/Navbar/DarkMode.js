import React from "react";
import lightbutton from "../../assets/website/light-mode-button.png";
import darkbutton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, settheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  });
  const toggletheme = (e) => {
    if (theme === "light") {
      settheme("dark");
    } else {
      settheme("light");
    }
  };
  return (
    <div className="relative ">
      <img
        onClick={toggletheme}
        src={lightbutton}
        alt=""
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100 "
        } transition-all duration-300 `}
      />
      <img
        onClick={toggletheme}
        src={darkbutton}
        alt=""
        className={`w-12 cursor-pointer transition-all duration-200  `}
      />
    </div>
  );
};

export default DarkMode;
