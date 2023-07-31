import { useCallback, useState } from "react";

export const useColorTheme = () => {
  const COLOR_THEME = {
    light: "light",
    dark: "dark",
  };
  const [colorTheme, setColorTheme] = useState(COLOR_THEME.dark);

  const changeColorTheme = useCallback((theme = "") => {
    const currentTheme = theme === "" ? COLOR_THEME.light : theme;
    setColorTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  const toggleColorTheme = useCallback(() => {
    colorTheme === COLOR_THEME.light
      ? changeColorTheme(COLOR_THEME.dark)
      : changeColorTheme(COLOR_THEME.light);
  }, [colorTheme, changeColorTheme]);
  return { colorTheme, changeColorTheme, toggleColorTheme };
};
