import React, { FC } from "react";

// Assets
import logoImg from "../assets/images/logo.png";

// Components
import Backdrop from "./Backdrop.component";

interface IProps {
  isDarkMode: boolean;
}

const Spinner: FC<IProps> = ({ isDarkMode }) => {
  return (
    <Backdrop isDarkMode={isDarkMode}>
      <img
        src={logoImg}
        alt="Impossibile visualizzare l'immagine."
        className="w-20"
        style={{ animation: "animateLogo  linear 1s infinite alternate" }}
      />
    </Backdrop>
  );
};

export default Spinner;
