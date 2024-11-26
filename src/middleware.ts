import { auth } from "@/auth";

export default auth((req) => {
  console.log("Req Auth:", req.auth);
  if (!req.auth) {
    const newUrl = new URL("/api/auth/signin", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/private/:path*"],
};
