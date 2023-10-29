import { sendMail } from "@/libs/email-helper";
import dbConnect from "@libs/mongodb";
import { storeOTP } from "@libs/storeOTP";
import OTP from "@models/OTP";
import { getServerSession } from "next-auth";
import bcryptjs from "bcryptjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// create election
export const POST = async (request: NextRequest) => {
  const { data } = await request.json();
  const confirmationCode = (
    Math.floor(Math.random() * 90000) + 10000
  ).toString();

  try {
    // send otp to mail]
    console.log(data.email,confirmationCode )
    await sendMail({
      recipient: data.email,
      confirmationCode,
    });

    // store otp in session
    const hashedPassword = await bcryptjs.hash(data.password, 10);
    let cookieObj = {
      email: data.email,
      fname: data.Fname,
      lname: data.Lname,
      password: hashedPassword,
      otp: confirmationCode,
    };
    cookies().set({
      name: "confirmOTP",
      value: JSON.stringify(cookieObj),
    });
    console.log(cookies().get("confirmOTP"));
    // storeOTP(data.email, confirmationCode);
    return NextResponse.json({ response: true });
  } catch (error) {
    return NextResponse.json({ response: false });
  }
};
