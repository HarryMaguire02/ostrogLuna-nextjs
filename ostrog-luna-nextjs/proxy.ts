import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If path starts with /mk, let it through to [lang] route
  if (pathname.startsWith("/mk/") || pathname === "/mk") return;

  // If someone visits /en/..., redirect to /... (clean English URLs)
  if (pathname.startsWith("/en/") || pathname === "/en") {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(url);
  }

  // All other paths: rewrite internally to /en/... so [lang] route handles it
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
