"use client";
import {
  HomeIcon,
  ListVideo,
  LogIn,
  LucideDownloadCloud,
  MenuIcon,
  MessageSquareDotIcon,
  NotepadText,
  Settings,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [isPanelOpen, setPanelOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <nav
      className={`select-none fixed left-0 top-0 ${
        isPanelOpen ? "w-60" : "w-20"
      } bg-zinc-800 h-[calc(100vh-1rem)] flex flex-col justify-between py-4 ${
        isPanelOpen ? "pl-4" : "items-center"
      } text-zinc-400 m-2 rounded-2xl z-50 transition-all duration-75`}
    >
      <div className="flex flex-col gap-4">
        <button
          className="p-2 rounded-[0.5rem] hover:text-zinc-50 transition-all duration-75 w-fit"
          onClick={() => {
            setPanelOpen((prev) => !prev);
            console.log(`panel is ${!isPanelOpen}`);
            console.log(session?.user);
          }}
        >
          <MenuIcon strokeWidth={2.5} className="w-6 h-6" aria-hidden="true" />
        </button>
        <Link
          href="/"
          className={`p-2 rounded-[0.5rem] hover:text-zinc-50 transition-all duration-75 flex flex-row w-fit ${
            isPanelOpen ? "justify-start gap-8 " : "justify-center"
          } items-center`}
        >
          <HomeIcon strokeWidth={2.5} className="w-6 h-6" aria-hidden="true" />
          {isPanelOpen && <div className="text-xs ml-2">Home</div>}
        </Link>
        <Link
          href="/"
          className={`p-2 rounded-[0.5rem] hover:text-zinc-50 transition-all duration-75 flex flex-row w-fit ${
            isPanelOpen ? "justify-start gap-8 " : "justify-center"
          } items-center`}
        >
          <ListVideo strokeWidth={2.5} className="w-6 h-6" aria-hidden="true" />
          {isPanelOpen && <div className="text-xs ml-2">Watch</div>}
        </Link>
        <Link
          href="/"
          className={`p-2 rounded-[0.5rem] hover:text-zinc-50 transition-all duration-75 flex flex-row w-fit ${
            isPanelOpen ? "justify-start gap-8 " : "justify-center"
          } items-center`}
        >
          <NotepadText
            strokeWidth={2.5}
            className="w-6 h-6"
            aria-hidden="true"
          />
          {isPanelOpen && <div className="text-xs ml-2">Read</div>}
        </Link>
        <Link
          href="/"
          className={`p-2 rounded-[0.5rem] hover:text-zinc-50 transition-all duration-75 flex flex-row w-fit ${
            isPanelOpen ? "justify-start gap-8 " : "justify-center"
          } items-center`}
        >
          <MessageSquareDotIcon
            strokeWidth={2.5}
            className="w-6 h-6"
            aria-hidden="true"
          />
          {isPanelOpen && <div className="text-xs ml-2">Engage</div>}
        </Link>
        <Link
          href="/"
          className={`p-2 rounded-[0.5rem] hover:text-zinc-50 transition-all duration-75 flex flex-row w-fit ${
            isPanelOpen ? "justify-start gap-8 " : "justify-center"
          } items-center`}
        >
          <LucideDownloadCloud
            strokeWidth={2.5}
            className="w-6 h-6"
            aria-hidden="true"
          />
          {isPanelOpen && <div className="text-xs ml-2">Downloads</div>}
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {session && session.user && session.user.image ? (
          <Link
            href="/profile"
            className={`p-2 rounded-[0.5rem] hover:text-zinc-50 transition-all duration-75 flex flex-row w-fit ${
              isPanelOpen ? "justify-start gap-8 ml-[-8px]" : "justify-center"
            } items-center`}
          >
            <Avatar className="">
              <AvatarImage src={session.user.image} />
              <AvatarFallback>Z</AvatarFallback>
            </Avatar>
            {isPanelOpen && <div className="text-xs">{session.user.name?.split(" ")[0]}</div>}
          </Link>
        ) : (
          <Link
            href="/"
            className={`p-2 rounded-[0.5rem] hover:text-zinc-50 transition-all duration-75 flex flex-row w-fit ${
              isPanelOpen ? "justify-start gap-8" : "justify-center"
            } items-center`}
          >
            <LogIn strokeWidth={2.5} className="w-6 h-6" aria-hidden="true" />
            {isPanelOpen && <div className="text-xs">Log In</div>}
          </Link>
        )}
        <Link
          href="/settings"
          className={`p-2 rounded-[0.5rem] hover:text-zinc-50 transition-all duration-75 flex flex-row w-fit ${
            isPanelOpen ? "justify-start gap-10 " : "justify-center"
          } items-center`}
        >
          <Settings strokeWidth={2.5} className="w-6 h-6" aria-hidden="true" />
          {isPanelOpen && <div className="text-xs">Settings</div>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
