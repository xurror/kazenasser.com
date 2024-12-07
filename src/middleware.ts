import {
  getSession,
  withMiddlewareAuthRequired,
} from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";

export default withMiddlewareAuthRequired({
  async middleware(req) {
    console.log("middleware");
    const res = NextResponse.next();
    const user = (await getSession(req, res)) ?? {};
    // console.log(user);
    // res.cookies.set('hl', user.language);
    return res;
  },
  returnTo(req) {
    return `${req.nextUrl.basePath}${req.nextUrl.pathname}`;
  },
});

export const config = {
  //   matcher: '/about/:path*',
  matcher: ["/private/:path*"],
};
