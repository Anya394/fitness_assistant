import { NextRequest, NextResponse } from 'next/server';
import { generateToken, setTokenCookie } from '@/lib/auth';
import User from '@/models/user'; // Ваша модель пользователя

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Проверка существования пользователя
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 },
      );
    }

    // Хеширование пароля и создание пользователя
    //const hashedPassword = await hashPassword(password);
    const salt = crypto.getRandomValues(new Uint8Array(16)).toString('hex');
    const user = await User.create({ email, password: password, salt: salt });

    // Генерация токена
    const token = await generateToken({ userId: user.id, email: user.email });

    // Установка cookie с токеном
    return setTokenCookie(token);
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
