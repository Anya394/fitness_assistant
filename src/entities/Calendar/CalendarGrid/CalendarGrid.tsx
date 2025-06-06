import React, { useMemo } from 'react';
import {
  startOfMonth,
  endOfMonth,
  addDays,
  isSameDay,
  isSameMonth,
  getDay,
} from 'date-fns';
import { CalendarGridProps } from '@/app/types';
import * as S from './CalendarGrid.styled';
import DayCell from '@/entities/Calendar/DayCell/DayCell';
import { useAtom } from 'jotai';
import { currentDateAtom, defaultTrainingData } from '@/app/atomStorage';

const CalendarGrid: React.FC<CalendarGridProps> = React.memo(() => {
  const [currentDate] = useAtom(currentDateAtom);
  const [trainingData] = useAtom(defaultTrainingData);

  const getCalendarDays = useMemo(() => {
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
  }, [currentDate]);

  const calendarDays = getCalendarDays;
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
});

CalendarGrid.displayName = 'CalendarGrid';
export default CalendarGrid;
