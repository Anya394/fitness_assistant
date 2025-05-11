import { Control, FieldValues, Path } from 'react-hook-form';

// Данные взвешиваний.
export interface WeightData {
  date: Date;
  weight: number;
}

// Свойства графика взвешиваний.
export interface WeightProgressChartProps {
  data: WeightData[];
  width?: number;
  height?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
}

// Данные формы добавления взвешивания.
export interface WeightFormData {
  date: Date;
  weight: string;
}

// Свойства формы добавления взвешивания.
export interface AddFormProps {
  handleSetData: (data: WeightFormData) => void;
}

// Свойства календаря тренировок.
export interface TrainingCalendarProps {
  trainingDates?: Date[];
  currentDate?: Date;
}

// Данные тренировок.
export interface TrainingData {
  date: Date;
  title: string;
}

// Свойства ячейки с днём в календаре.
export interface DayCellProps {
  isCurrentMonth: boolean;
  day: Date;
  dayTrainings: TrainingData[];
}

// Свойства стиля ячейки с днём в календаре.
export interface DayCellStyleProps {
  isOtherMonth?: boolean;
  isWeekend?: boolean;
}

// Свойства стиля цифры с днём в календаре.
export interface DayNumberStyleProps {
  isTraining?: boolean;
  isToday?: boolean;
}

// Свойства набора цифр в календаре.
export interface CalendarGridProps {
  trainingData?: TrainingData[];
}

// Свойства формы добавления тренировок.
export interface TrainFormProps {
  handleSetData: (data: TrainingData) => void;
}

// Свойства поля с датой в формах.
export interface DateFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
}
