import { NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";


const protectedRoutes = ["/note/*", "/Dashboard"];
const publicRoutes = ["/Auth/Signup", "/Auth/Signin"]

export default async function middleware(req) {
    const path = req.nextUrl.pathname;

    if (path == "/") {
        return NextResponse.redirect(new URL("/Dashboard", req.nextUrl))
    }

    const isProtectedPath = protectedRoutes.includes(path);
    const isPublicPath = publicRoutes.includes(path);
    
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);
    console.log("session: ",session);

    if (isProtectedPath && !session?.userId) {
        return NextResponse.redirect(new URL("/Auth/Signin", req.nextUrl))
    }

    if (isPublicPath && session?.userId) {
        return NextResponse.redirect(new URL(`/Dashboard`, req.nextUrl))
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|.*\\.png$).*)',
        "/Dashboard/:path*",
        "/Auth/Signin",
        "/Auth/Signup",
    ],
}