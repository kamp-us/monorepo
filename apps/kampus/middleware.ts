import { NextResponse, type NextRequest } from "next/server";
import { authMiddleware } from "@clerk/nextjs";

function postaciMiddleware(request: NextRequest) {
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

export default authMiddleware({
  beforeAuth: (req) => {
    return postaciMiddleware(req);
  },

  publicRoutes: ["/", "/pano(.*)", "/sozluk(.*)"],
  // publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
