"use client";
import { signIn } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <>
      <div>Log In</div>
      <button onClick={() => signIn("google",{ callbackUrl: "/" })}>Google</button>
      <button onClick={() => signIn("github",{ callbackUrl: "/" })}>Github</button>
    </>
  );
};

export default page;
