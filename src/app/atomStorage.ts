import { atom } from 'jotai';

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

export const isLoggedInAtom = atom(false);
