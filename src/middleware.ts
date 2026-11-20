import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from '@/utils/site';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const prefix = `/${defaultLocale}`;
  if (url.pathname === prefix || url.pathname.startsWith(`${prefix}/`)) {
    url.pathname = url.pathname.slice(prefix.length) || '/';
    return NextResponse.redirect(url, 308);
  }
  if (
    locales.some(
      (locale) => url.pathname === `/${locale}` || url.pathname.startsWith(`/${locale}/`),
    )
  )
    return NextResponse.next();
  url.pathname = `${prefix}${url.pathname === '/' ? '' : url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = { matcher: ['/((?!api|_next|.*\\..*).*)'] };
