import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const hasToken = req.cookies.has('REFRESH');
  const pathname = req.nextUrl.pathname;
  const query = pathname === '/' ? '' : `?next=${pathname}`;
  const isAuthPath = req.nextUrl.pathname.startsWith('/auth');
  if (isAuthPath && hasToken) {
    // 유저가 토큰을 가지고 auth 페이지에 접근하면 홈으로 리디렉션
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }
  if (!isAuthPath && !hasToken) {
    // 유저가 토큰이 없고 로그인 페이지가 아닌 페이지에 권한이 필요한 서비스에 접근하면 로그인 페이지로 리디렉션
    return NextResponse.redirect(new URL(`/auth/login${query}`, req.nextUrl));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/community', '/chat/:path*', '/auth/:path*'],
};
