import { serialize } from 'cookie';
import { NextResponse } from 'next/server';
import { JWTPayload, SignJWT, jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET_KEY!);
const MAX_AGE = 60 * 60 * 24 * 30; // 30 дней

export async function hashPassword(
  password: string,
  salt: string,
): Promise<string> {
  const encoder = new TextEncoder();
  const material = encoder.encode(password + salt);
  const hashBuffer = await crypto.subtle.digest('SHA-256', material);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function comparePasswords(
  password: string,
  hashedPasswordWithSalt: string,
): Promise<boolean> {
  const arr = hashedPasswordWithSalt.split(':');
  const salt = arr[0];
  const hashedPassword = arr[1];
  const newHash = await hashPassword(password, salt);
  return newHash === hashedPassword;
}

export async function generateToken(payload: {
  userId: string;
  email: string;
}): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(SECRET_KEY);
}

export async function verifyToken(token: string): Promise<JWTPayload> {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    console.log(payload);
    return payload;
  } catch (err) {
    throw new Error('Invalid token. ' + err);
  }
}

export function setTokenCookie(token: string): NextResponse {
  const serialized = serialize('authToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: MAX_AGE,
    path: '/',
  });

  return new NextResponse(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Set-Cookie': serialized },
  });
}

export function removeTokenCookie(): NextResponse {
  const serialized = serialize('authToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0),
    path: '/',
  });

  return new NextResponse(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Set-Cookie': serialized },
  });
}
