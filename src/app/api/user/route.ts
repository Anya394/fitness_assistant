import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import User from '@/models/user';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('authToken')?.value;

    if (!token) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    const decoded = verifyToken(token);
    const user = await User.findById(decoded.userId).select('-password');

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error('User fetch error:', error);
    return NextResponse.json({ user: null }, { status: 200 });
  }
}
