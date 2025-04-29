import React, { FC, ReactNode } from "react";

interface IProps {
  isDarkMode: boolean;
  children: ReactNode;
}

const Backdrop: FC<IProps> = ({ isDarkMode, children }) => {
  return (
    <div
      style={{ backgroundColor: isDarkMode ? "#ffffff7e" : "#0000007e" }}
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center`}
    >
      {children}
    </div>
  );
};

export default Backdrop;
