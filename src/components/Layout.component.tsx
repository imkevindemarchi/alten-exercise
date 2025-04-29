import React, { FC, ReactNode } from "react";

// Components
import Navbar from "./Navbar.component";

interface IProps {
  children: ReactNode;
  isDarkMode: boolean;
}

const Layout: FC<IProps> = ({ isDarkMode, children }) => {
  const navbar: ReactNode = <Navbar isDarkMode={isDarkMode} />;

  return (
    <div
      className={`transition-all duration-300 min-h-[100vh] ${
        isDarkMode ? "bg-background-dark" : "bg-background"
      }`}
    >
      {navbar}
      {children}
    </div>
  );
};

export default Layout;
