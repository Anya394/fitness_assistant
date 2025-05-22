import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const currentDateAtom = atom(new Date());

export const defaultTrainingData = atom([
  { date: new Date(2025, 4, 1), title: 'Силовая тренировка' },
  { date: new Date(2025, 4, 5), title: 'Кардио' },
  { date: new Date(2025, 4, 12), title: 'Йога' },
  { date: new Date(2025, 4, 15), title: 'Кроссфит' },
  { date: new Date(2025, 4, 20), title: 'Плавание' },
  { date: new Date(2025, 4, 25), title: 'Бег' },
  { date: new Date(2025, 5, 3), title: 'Спиннинг' },
  { date: new Date(2025, 5, 10), title: 'Тренажерный зал' },
  { date: new Date(2025, 5, 10), title: 'Спиннинг' },
]);

export const isLoggedInAtom = atomWithStorage('isLoggedInAtom', false);

export const defaultWeightData = atom([
  { date: new Date(2025, 3, 1), weight: 75.5 },
  { date: new Date(2025, 3, 5), weight: 74.8 },
  { date: new Date(2025, 3, 10), weight: 74.2 },
  { date: new Date(2025, 3, 15), weight: 73.9 },
  { date: new Date(2025, 3, 20), weight: 73.5 },
  { date: new Date(2025, 3, 25), weight: 73.0 },
  { date: new Date(2025, 3, 30), weight: 72.7 },
]);
