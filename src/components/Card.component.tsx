import React, { FC } from "react";

// Types
import { TPost, TSelectedPost, TUser } from "../types/types";

interface IProps {
  data: TPost;
  user: TUser;
  onClick: (data: TSelectedPost) => void;
  isDarkMode: boolean;
}

const Card: FC<IProps> = ({ data, user, onClick, isDarkMode }) => {
  const userInitials: string = `${user.name.split(" ")[0].charAt(0)}${user.name
    .split(" ")[1]
    .charAt(0)}`;

  return (
    <div
      className={`flex flex-row border-2 p-10 rounded-3xl transition-all duration-300 gap-5 mobile:p-5 ${
        isDarkMode ? "bg-black border-drakgray" : "bg-white border-gray"
      }`}
    >
      <div
        onClick={() => onClick({ post: data, user })}
        className="w-[50px] h-[50px] bg-red rounded-lg flex justify-center items-center cursor-pointer transition-all duration-300 hover:opacity-50 p-5"
      >
        <span className="text-white font-bold text-3xl">{userInitials}</span>
      </div>
      <div className="flex flex-col">
        <span
          className={`text-[2rem] font-bold transition-all duration-300 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {data.title}
        </span>
        <span
          className={`text-[0.75rem] transition-all duration-300 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Pubblicato da:{" "}
          <span className="text-red underline">{user.username}</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
