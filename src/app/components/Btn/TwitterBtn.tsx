"use client";

import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";

const TwitterBtn = () => {
  return (
    <div className="border-solid border-black border m-2 flex items-center justify-center rounded-l-full rounded-r-full px-11 py-3">
      <AiOutlineTwitter
        className="h-6 w-6 transform transition duration-500 hover:rotate-[360deg]"
        style={{ color: "#1DA1F2" }}
      />
      <span className="ml-2">Twitter</span>
    </div>
  );
};

export default TwitterBtn;
