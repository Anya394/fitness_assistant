'use client';

import FitnessDashboard from '@/features/FitnessDashboard/FitnessDashboard';
import Link from 'next/link';

export default function Weight() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 font-[family-name:var(--font-geist-sans)]">
      <FitnessDashboard />
      <div>
        <Link href="./">Назад</Link>
      </div>
    </div>
  );
}
