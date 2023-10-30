import { NextResponse } from "next/server";
import dbConnect from "@/libs/mongodb";
import User from "@/models/User";

// create user
export const POST = async (request: Request) => {
  const { data } = await request.json();
  console.log(data);
  // try {
  //   await dbConnect();
  //   const newUser = await User.create(data);
  //   await newUser.save();
  //   return NextResponse.json({ msg: "user created" }, { status: 201 });
  // } catch (error) {
  //   console.log(error);
  //   return new NextResponse(JSON.stringify({ data: "newUser not created" }));
  // }
  return new NextResponse(JSON.stringify({ data: "newUser not created" }));
};
