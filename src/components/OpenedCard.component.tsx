import React, { FC } from "react";

// Types
import { TSelectedPost } from "../types/types";

interface IProps {
  data: TSelectedPost;
  onClose: () => void;
}

const OpenedCard: FC<IProps> = ({ data, onClose }) => {
  return (
    <div className="border-[1px] border-lightgray flex flex-col gap-5 p-10 rounded-lg shadow-lg w-[500px]">
      <div className="flex flex-row gap-1">
        <span>post pubblicato da:</span>
        <span>{data.user.name}</span>
        <span>alias</span>
        <span className="text-red">{data.user.username}</span>
      </div>
      <span className="text-[2rem] font-bold text-red">{data.post.title}</span>
      <span className="text-[1rem]">{data.post.body}</span>
      <div>
        <button
          onClick={onClose}
          className="bg-red text-white rounded-lg px-5 py-2"
        >
          Chiudi
        </button>
      </div>
    </div>
  );
};

export default OpenedCard;
