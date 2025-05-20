import * as React from "react";
import { ThemeContext } from "../context/useThemeContext";
import darkIcon from "../assets/moonIcon.jpg";
import lightIcon from "../assets/sunIcon.gif";

interface IButtonThemeProps {}

const ButtonTheme: React.FC<
  IButtonThemeProps & { children?: React.ReactNode }
> = ({ children }) => {
  const themeContext = React.useContext(ThemeContext);
  if (!themeContext) return null;

  const { theme, toggleTheme } = themeContext;

  return (
    <button
      onClick={toggleTheme}
      className="mt-0"
      style={{ padding: 0, border: "none", background: "none", width: "40px" }}
      title="Change Theme"

    >
      <img
        src={theme === "light" ? darkIcon : lightIcon}
        className="rounded-circle shadow"
        alt="Profile"
        width={40}
        height={40}
        style={{
          marginRight: children ? 8 : 0,
          objectFit: "cover",
          border: "none",
          
        }}
      />
      {children}
    </button>
  );
};

export default ButtonTheme;
