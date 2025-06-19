import { NextResponse } from "next/server";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://dev.koriel.net");

export async function POST(req) {
  try {
    const data = await req.json();
    await pb.collection("newMembers").create(data);
    return NextResponse.json(data);
  } catch {
    return NextResponse.error("Failed to update db");
  }
}
