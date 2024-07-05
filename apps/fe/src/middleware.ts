// middleware.js

import { NextResponse } from 'next/server';

export function middleware(req: any) {
  const url = req.nextUrl.clone();

  // Define the maintenance page path
  const maintenancePath = '/';

  // Check if the request is already for the maintenance page
  if (url.pathname === maintenancePath) {
    return NextResponse.next();
  }

  // Redirect all other requests to the maintenance page
  url.pathname = maintenancePath;
  return NextResponse.redirect(url);
}

export const config = {
  // Apply middleware to all pages
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
