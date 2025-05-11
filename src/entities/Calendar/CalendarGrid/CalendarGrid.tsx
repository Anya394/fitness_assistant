import React from 'react';
import {
  startOfMonth,
  endOfMonth,
  addDays,
  isSameDay,
  isSameMonth,
  getDay,
} from 'date-fns';
import { CalendarGridProps, sampleTrainingData } from '@/app/types';
import * as S from './CalendarGrid.styled';
import DayCell from '@/entities/Calendar/DayCell/DayCell';
import { useAtom } from 'jotai';
import { currentDateAtom } from '@/app/atomStorage';

const CalendarGrid: React.FC<CalendarGridProps> = ({
  trainingData = sampleTrainingData,
}) => {
  const [currentDate] = useAtom(currentDateAtom);

  const getCalendarDays = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDay = getDay(monthStart) === 0 ? 6 : getDay(monthStart) - 1;

    const days = [];

    // Добавление дней предыдущего месяца
    for (let i = 0; i < startDay; i++) {
      days.push(addDays(monthStart, -(startDay - i)));
    }

    // Добавление дней текущего месяца
    for (let i = 0; i < monthEnd.getDate(); i++) {
      days.push(addDays(monthStart, i));
    }

    // Добавление дней следующего месяца
    const daysToAdd = 42 - days.length;
    for (let i = 1; i <= daysToAdd; i++) {
      days.push(addDays(monthEnd, i));
    }

    return days;
  };

  const calendarDays = getCalendarDays();
  const weekdayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  return (
    <S.CalendarGrid>
      {weekdayNames.map((day, index) => (
        <S.Weekday key={day} isWeekend={index >= 5}>
          {day}
        </S.Weekday>
      ))}

      {calendarDays.map((day, index) => {
        const dayTrainings = trainingData.filter((td) =>
          isSameDay(td.date, day),
        );

        return (
          <DayCell
            key={index}
            day={day}
            dayTrainings={dayTrainings}
            isCurrentMonth={isSameMonth(day, currentDate)}
          />
        );
      })}
    </S.CalendarGrid>
  );
};

export default CalendarGrid;
