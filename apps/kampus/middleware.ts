import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // block requests if the origin is not from *.kamp.us
  if (request.nextUrl.pathname.startsWith("/postaci")) {
    response.headers.append("Access-Control-Allow-Origin", "*.kamp.us");

    // allow for "localhost" access if NODE_ENV is "development"
    if (process.env.NODE_ENV === "development") {
      response.headers.append("Access-Control-Allow-Origin", "*");
    }
  }

  return response;
}
