import React from 'react';
import { useAtom } from 'jotai';
import { format, addMonths, subMonths } from 'date-fns';
import { ru } from 'date-fns/locale';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import * as S from './CalendarHeader.styled';
import { currentDateAtom } from '@/app/atomStorage';

const CalendarHeader: React.FC = React.memo(() => {
  const [currentDate, setCurrentDate] = useAtom(currentDateAtom);

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  return (
    <S.CalendarHeader>
      <S.NavigationButton onClick={handlePrevMonth}>
        <ChevronLeftIcon />
      </S.NavigationButton>

      <S.MonthTitle variant="h6">
        {format(currentDate, 'LLLL yyyy', { locale: ru })}
      </S.MonthTitle>

      <S.NavigationButton onClick={handleNextMonth}>
        <ChevronRightIcon />
      </S.NavigationButton>
    </S.CalendarHeader>
  );
});

export default CalendarHeader;
