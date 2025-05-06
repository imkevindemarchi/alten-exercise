import React, { FC, useContext } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

// Assets
import logoImg from "../assets/images/logo.png";

// Contexts
import { ThemeContext, TThemeContext } from "../providers/theme.provider";

// Icons
import SunIcon from "@mui/icons-material/Sunny";
import MoonIcon from "@mui/icons-material/Bedtime";

interface IProps {
  isDarkMode: boolean;
}

const Navbar: FC<IProps> = ({ isDarkMode }) => {
  const { onStateChange: onThemeHandler }: TThemeContext = useContext(
    ThemeContext
  ) as TThemeContext;
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="w-full h-20 flex flex-row items-center justify-between mobile:justify-center mobile:gap-5 p-20">
      <img
        src={logoImg}
        alt="Impossibile visualizzare l'immagine."
        className="h-20 object-contain cursor-pointer hover:opacity-50 transition-all duration-300"
        onClick={() => navigate("/")}
      />
      <button
        onClick={onThemeHandler}
        className={`flex items-center justify-center p-3 transition-all duration-300 rounded-full ${
          isDarkMode ? "bg-drakgray text-gray" : "bg-lightgray text-drakgray"
        }`}
      >
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};

export default Navbar;
