import React, { ReactNode } from "react";

// Components
import Backdrop from "./Backdrop.component";

// Icons
import CloseIcon from "@mui/icons-material/Close";

interface IProps {
  isOpen: boolean;
  isDarkMode: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal: any = ({
  isOpen,
  isDarkMode,
  title,
  onClose,
  children,
}: IProps) => {
  return (
    isOpen && (
      <Backdrop isDarkMode={isDarkMode}>
        <div
          className={`flex flex-col p-10 rounded-3xl transition-all duration-300 gap-5 mobile:w-[90%] ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
        >
          <div className="flex flex-row items-center justify-between gap-10">
            <span
              className={`transition-all duration-300 font-bold text-3xl uppercase mobile:w-[30%] ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Dettaglio
            </span>
            <button
              onClick={onClose}
              className={`flex items-center justify-center p-3 transition-all duration-300 rounded-full ${
                isDarkMode
                  ? "bg-drakgray text-gray"
                  : "bg-lightgray text-drakgray"
              }`}
            >
              <CloseIcon />
            </button>
          </div>
          {children}
        </div>
      </Backdrop>
    )
  );
};

export default Modal;
