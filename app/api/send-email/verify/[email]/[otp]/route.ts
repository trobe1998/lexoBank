import dbConnect from "@libs/mongodb";
import OTP from "@models/OTP";
import { NextResponse } from "next/server";

// check opt and verify
export const GET = async (request: Request) => {
  const { data } = await request.json();

  try {
    await dbConnect();
    const isExist = await OTP.findOne({
      email: data.email,
    });

    const authStat =
      isExist !== null && isExist.otp === data.otp ? true : false;

    return new NextResponse(JSON.stringify({ msg: authStat }));
  } catch (error) {
    throw new Error();
  }
};
