"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data, status } = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Home</div>
      <button onClick={() => signIn("google")}>Login</button>
      <button onClick={() => signOut()}>Log Out</button>
      <p>{data?.user.name}</p>
      <p>{data?.user.email}</p>
      <p>{status}</p>
    </main>
  );
}
