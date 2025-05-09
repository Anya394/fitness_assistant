'use client';

import Link from "next/link";

export default function Training() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 font-[family-name:var(--font-geist-sans)]">
      <div>
        Тренировки
      </div>
      <div>
        <Link href="./">Назад</Link>
      </div>
    </div>
  );
}
