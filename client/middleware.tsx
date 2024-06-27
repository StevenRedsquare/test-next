import { NextResponse } from "next/server";
import { isEmpty, some, startsWith } from "lodash";

export function middleware(request: NextResponse) {
    const cookies = request.cookies.get("loggedIn");
    const isLoggedIn = !isEmpty(cookies?.value);
    const { pathname } = new URL(request.url);

    // Not logged and protected routes
    if (
        !isLoggedIn &&
        !some(GUEST_ROUTES, (guestRoute: string) =>
            startsWith(pathname, guestRoute),
        )
    ) {
        const url = new URL("/login", request.url);
        return NextResponse.redirect(url);
    } 
    // Logged and in /login route
    else if (
        isLoggedIn &&
        startsWith(pathname, "/login")
    ) {
        const url = new URL("/", request.url);
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

const GUEST_ROUTES = ["/login"];

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};
