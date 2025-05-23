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
  onSubmit?: (data: TrainingData) => void;
}

// Свойства поля с датой в формах.
export interface DateFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
}

// Пользователь.
export interface IUser {
  id: string;
  email: string;
  password: string;
  name?: string;
  role?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Свойства кнопок.
export interface ButtonProps {
  toggleDrawer?: () => void;
}

// Свойства подвала формы регистрации.
export interface FormFooterProps {
  question: string;
  answer: string;
  link: string;
}

// Свойства названия формы.
export interface FormTitleProps {
  text: string;
}

// Свойства полей формы регистрации/входа.
export interface FieldProps {
  register: any;
  errors: any;
}

// Данные формы регистрации/входа.
export interface AuthenticationFormData {
  email: string;
  password: string;
}

// Свойства навигационных кнопок.
export interface NavButtonProps {
  active?: boolean;
}

// Свойства кнопок.
export interface SubmitButtonProps {
  text?: string;
  handleClick?: () => void;
}
