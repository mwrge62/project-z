"use server";
import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";
import { users, channel } from "@/server/db/schema";
import { and, eq } from "drizzle-orm";

export async function getUser() {
  const session = await getServerAuthSession();
  if (!session) {
    return { email: null, id: null };
  }
  const email = session.user.email;
  const id = session.user.id;
  const user = await db.select().from(users).where(eq(users.id, id));
  if (user) {
    return { email, id };
  }
  return { email: null, id: null };
}

export async function getChannel() {
  const user = await getUser();
  if (!user || !user.email || !user.id) {
    return null;
  }
  const email = user.email;
  const id = user.id;
  const channelField = await db
    .select()
    .from(channel)
    .where(and(eq(channel.email, email), eq(channel.userId, id)));

  // const u = (await db.select().from(users).where(eq(users.email, email)))
  return channelField || null;
}

export async function pushVideoData(title: string, channel: string) {}

export async function createChannel(name: string) {
  const user = await getUser();
  if (!user || !user.email || !user.id) {
    throw new Error("User not authenticated");
  }

  const { email, id } = user;

  const createdChannel = db
    .insert(channel)
    .values({
      email,
      userId: id,
      name,
    })
    .returning();

  return createdChannel;
}
