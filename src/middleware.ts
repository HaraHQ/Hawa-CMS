import { NextRequest, NextResponse } from 'next/server';
import config from '../config.json'

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.next();
  }
  // Check config and redirect if database isn't set up
  if (config.setup !== null && !config.database && !config.dbs.length) {
    if (!request.nextUrl.pathname.startsWith('/installation')) {
      return NextResponse.redirect(new URL('/installation', request.url));
    }
  }

  return NextResponse.next();
}