import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const cookie = request.cookies.get('token')?.value || '';
  const isPublic = path === '/login' || path === '/signup';
  if (isPublic && cookie) {
    return NextResponse.redirect(new URL('/profile', request.nextUrl));
  }
  if (!isPublic && !cookie) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile/:path*', '/login', '/signup', '/profile', '/']
};
