import { NextResponse } from "next/server";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://db.ieee-esb.org");

export async function POST(req) {
  try {
    const data = await req.json();
    const users = await pb.collection("users").getFullList();
    const userID = users.filter((user) => user.email == data.email)[0].id;
    await pb.collection("newOfficers").create({ user: userID });
    return NextResponse.json(data);
  } catch (e) {
    console.log(e);
    return NextResponse.error("Failed to update db");
  }
}
