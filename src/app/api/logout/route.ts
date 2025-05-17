import { removeTokenCookie } from '@/lib/auth';

export async function POST() {
  return removeTokenCookie();
}
