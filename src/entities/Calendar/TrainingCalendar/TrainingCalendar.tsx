import React from 'react';
import * as S from './TrainingCalendar.styled';
import CalendarDays from '@/entities/Calendar/CalendarGrid/CalendarGrid';
import CalendarHeader from '@/entities/Calendar/CalendarHeader/CalendarHeader';

const TrainingCalendar: React.FC = () => {
  return (
    <S.CalendarContainer elevation={0}>
      <CalendarHeader />
      <CalendarDays />
    </S.CalendarContainer>
  );
};

export default TrainingCalendar;
