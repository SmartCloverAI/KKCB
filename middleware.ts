import { NextResponse, type NextRequest } from "next/server";

import { REQUEST_PATH_HEADER } from "@/lib/site-utils";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(REQUEST_PATH_HEADER, request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|webmanifest)$).*)"
  ]
};
