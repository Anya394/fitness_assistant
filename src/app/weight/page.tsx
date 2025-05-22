'use client';

import WeighingWidget from '@/features/Widget/WeighingWidget/WeighingWidget';

export default function Weight() {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] gap-4 font-[family-name:var(--font-geist-sans)]">
      <WeighingWidget />
    </div>
  );
}
