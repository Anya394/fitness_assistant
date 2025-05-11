export interface WeightData {
  date: Date;
  weight: number;
}

export interface WeightProgressChartProps {
  data: WeightData[];
  width?: number;
  height?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
}

export interface WeightFormData {
  date: Date;
  weight: string;
}
//______________________________________

export interface AddFormProps {
  handleSetWeightData: (data: WeightFormData) => void;
}
//______________________________________

export interface TrainingCalendarProps {
  trainingDates?: Date[];
  currentDate?: Date;
}

export interface TrainingData {
  date: Date;
  title: string;
}

// Пример данных о тренировках
export const sampleTrainingData: TrainingData[] = [
  { date: new Date(2025, 4, 1), title: 'Силовая тренировка' },
  { date: new Date(2025, 4, 5), title: 'Кардио' },
  { date: new Date(2025, 4, 12), title: 'Йога' },
  { date: new Date(2025, 4, 15), title: 'Кроссфит' },
  { date: new Date(2025, 4, 20), title: 'Плавание' },
  { date: new Date(2025, 4, 25), title: 'Бег' },
  { date: new Date(2025, 5, 3), title: 'Спиннинг' },
  { date: new Date(2025, 5, 10), title: 'Тренажерный зал' },
  { date: new Date(2025, 5, 10), title: 'Спиннинг' },
];
//______________________________________

export interface DayCellProps {
  isCurrentMonth: boolean;
  day: Date;
  dayTrainings: TrainingData[];
}

export interface DayCellStyleProps {
  isOtherMonth?: boolean;
  isWeekend?: boolean;
}

export interface DayNumberStyleProps {
  isTraining?: boolean;
  isToday?: boolean;
}
//______________________________________

export interface CalendarGridProps {
  trainingData?: TrainingData[];
}
