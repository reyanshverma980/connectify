"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const secret = process.env.STREAM_SECRET_KEY;

export async function tokenProvider() {
	const user = await currentUser();

	if (!user) throw new Error("User is not logged in");
	if (!apiKey) throw new Error("Stream API Key missing");
	if (!secret) throw new Error("No API secret");

	const client = new StreamClient(apiKey, secret);

	const exp = Math.floor(new Date().getTime() / 1000) + 60 * 60;

	const token = client.generateUserToken({ user_id: user.id, exp });

	return token;
}
