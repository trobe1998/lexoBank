import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  let hasCookie = request.cookies.has("user");
  if (hasCookie) {
    request.cookies.delete("user");
    NextResponse.redirect(new URL("/auth/login", request.url));
  }

  let response = NextResponse.next();

  return response;
};
