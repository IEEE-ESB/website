import { NextResponse } from "next/server";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://dev.koriel.net");

export async function POST(req) {
  try {
    const data = await req.json();
    const users = await pb.collection("users").getFullList();
    console.log(users);
    const userID = users.filter((user) => user.email == data.email)[0].id;
    console.log(userID);
    // console.log(user);
    await pb.collection("newOfficers").create({ user: userID });
    return NextResponse.json(data);
  } catch (e) {
    console.log(e);
    return NextResponse.error("Failed to update db");
  }
}

// {
//   "avatar": "",
//   "collectionId": "_pb_users_auth_",
//   "collectionName": "users",
//   "created": "2025-05-09 21:21:56.622Z",
//   "email": "koriel.lopez01@utrgv.edu",
//   "emailVisibility": false,
//   "id": "55mlco319e9hy7o",
//   "name": "Koriel Lopez",
//   "updated": "2025-05-31 21:30:55.425Z",
//   "verified": true
// }
