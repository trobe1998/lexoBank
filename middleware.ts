import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //   let cookie = request.cookies.get("nextjs");
  //console.log(cookie); // => { name: 'nextjs', value: 'fast', Path: '/' }
  //const allCookies = request.cookies.getAll();
  //console.log(allCookies); // => [{ name: 'nextjs', value: 'fast' }]

  let hasCookie = request.cookies.has("user"); // => true
  //request.cookies.delete("nextjs");
  console.log(hasCookie);
  if (!hasCookie) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
let response = NextResponse.next()
  return response;
}

export const config = {
  matcher: "/user/:path*",
};
