'use client';

import TrainingWidget from '@/features/Widget/TrainingWidget/TrainingWidget';
import Link from 'next/link';

export default function Training() {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] gap-4 font-[family-name:var(--font-geist-sans)]">
      <TrainingWidget />
    </div>
  );
}
