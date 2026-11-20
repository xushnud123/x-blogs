import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  if (url.pathname === '/uz' || url.pathname.startsWith('/uz/')) {
    url.pathname = url.pathname.slice(3) || '/';
    return NextResponse.redirect(url, 308);
  }
  if (/^\/(en|ru)(\/|$)/.test(url.pathname)) return NextResponse.next();
  url.pathname = `/uz${url.pathname === '/' ? '' : url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = { matcher: ['/((?!api|_next|.*\\..*).*)'] };
