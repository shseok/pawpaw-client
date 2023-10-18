import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const hasToken = req.cookies.has('REFRESH');
  const pathname = req.nextUrl.pathname;
  const query = pathname === '/' ? '' : `?next=${pathname}`;
  if (!hasToken) {
    return NextResponse.redirect(new URL(`/auth/login${query}`, req.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/community', '/chat/:path*'],
};
