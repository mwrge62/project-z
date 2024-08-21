import { HamIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 w-10 bg-white h-screen flex flex-col justify-center items-center text-zinc-600 hover:text-zinc-950 delay-100">
      <div>
        <button>
          <MenuIcon className="font-extrabold"/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
