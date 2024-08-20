"use server";
import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";
import { users, channel } from "@/server/db/schema";
import { and, eq } from "drizzle-orm";

async function getUser() {
  const session = await getServerAuthSession();
  if (!session) {
    return;
  }
  const email = session.user.email;
  const id = session.user.id;
  const user = db.select().from(users).where(eq(users.id, id));
  if (email && id) {
    return { email, id };
  }
  return { email: null, id: null };
}

async function getChannel() {
  const user = await getUser();
  if (!user) {
    return;
  }
  const email = user.email;
  const id = user.id;
  if (email && id) {
    const channelField = db
      .select()
      .from(channel)
      .where(and(eq(channel.email, email), eq(channel.userId, id)));
  }
}

async function pushVideoData(title: string, channel: string) {}
