"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleBtn = () => {
  return (
    <div className="border-solid border-black border m-2 flex items-center justify-center rounded-l-full rounded-r-full px-11 py-3">
      <FcGoogle className="h-6 w-6 transform transition duration-500 hover:rotate-[360deg]" />
      <span className="ml-2">Google</span>
    </div>
  );
};

export default GoogleBtn;
