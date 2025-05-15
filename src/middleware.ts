import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/auth';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get('authToken')?.value;

  // Пути, которые не требуют аутентификации
  const publicPaths = ['/login', '/register'];

  // Если пользователь уже аутентифицирован и пытается попасть на публичные пути
  if (token && publicPaths.includes(path)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Защищенные пути
  if (!token && !publicPaths.includes(path)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    if (token) {
      await verifyToken(token);
    }
    return NextResponse.next();
  } catch (error) {
    console.error('JWT Error:', error);
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('authToken');
    return response;
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
