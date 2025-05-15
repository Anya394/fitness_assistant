import { NextRequest, NextResponse } from 'next/server';
import { comparePasswords, generateToken, setTokenCookie } from '@/lib/auth';
import User from '@/models/user';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Поиск пользователя
    const user = await User.findByEmail(email);
    if (!user) {
      return NextResponse.json({ error: 'Invalid login' }, { status: 401 });
    }

    // Проверка пароля
    const isMatch = await comparePasswords(password, user.password, user.salt);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // Генерация токена
    const token = await generateToken({ userId: user.id, email: user.email });

    // Установка cookie с токеном
    return setTokenCookie(token);
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
