import {
  HomeIcon,
  ListVideo,
  LucideDownloadCloud,
  MenuIcon,
  MessageSquareDotIcon,
  NotepadText,
  Video,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 w-[5rem] bg-zinc-800 h-[calc(100vh-1rem)] flex flex-col justify-between py-4 items-center text-zinc-400 m-2 rounded-2xl z-50">
      <div className="flex flex-col gap-4 justify-center items-center">
        <button className="p-2 rounded-[0.5rem] hover:text-zinc-50 transition-all duration-75">
          <MenuIcon strokeWidth={2.5} className="w-6 h-6" aria-hidden="true" />
        </button>
        <Link
          href="/"
          className="p-2 rounded-[0.5rem] hover:text-zinc-50 transition-all duration-75 flex flex-col justify-center items-center"
        >
          <HomeIcon strokeWidth={2.5} className="w-6 h-6" aria-hidden="true" />
          <div className="text-xs">Home</div>
        </Link>
        <Link
          href="/"
          className="p-2 rounded-[0.5rem] hover:text-zinc-50 transition-all duration-75 flex flex-col justify-center items-center"
        >
          <ListVideo strokeWidth={2.5} className="w-6 h-6" aria-hidden="true" />
          <div className="text-xs">Watch</div>
        </Link>
        <Link
          href="/"
          className="p-2 rounded-[0.5rem] hover:text-zinc-50 transition-all duration-75 flex flex-col justify-center items-center"
        >
          <NotepadText
            strokeWidth={2.5}
            className="w-6 h-6"
            aria-hidden="true"
          />
          <div className="text-xs">Read</div>
        </Link>
        <Link
          href="/"
          className="p-2 rounded-[0.5rem] hover:text-zinc-50 transition-all duration-75 flex flex-col justify-center items-center"
        >
          <MessageSquareDotIcon
            strokeWidth={2.5}
            className="w-6 h-6"
            aria-hidden="true"
          />
          <div className="text-xs">Engage</div>
        </Link>
        <Link
          href="/"
          className="p-2 rounded-[0.5rem] hover:text-zinc-50 transition-all duration-75 flex flex-col justify-center items-center"
        >
          <LucideDownloadCloud
            strokeWidth={2.5}
            className="w-6 h-6"
            aria-hidden="true"
          />
          <div className="text-xs">Download</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
