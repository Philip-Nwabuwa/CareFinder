"use client";
import { auth } from "@/app/lib/firestore";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const GoogleBtn = () => {
  const googleAuth = new GoogleAuthProvider();
  const handleSignInWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };

  return (
    <button
      onClick={handleSignInWithGoogle}
      className="border-solid border-black border m-2 flex items-center justify-center rounded-l-full rounded-r-full px-11 py-3"
    >
      <FcGoogle className="h-6 w-6 transform transition duration-500 hover:rotate-[360deg]" />
      <span className="ml-2">Google</span>
    </button>
  );
};

export default GoogleBtn;
