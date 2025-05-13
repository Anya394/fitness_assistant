import React from 'react';
import { Tooltip } from '@mui/material';
import { format, isSameDay } from 'date-fns';
import { DayCellProps, TrainingData } from '@/app/types';
import * as S from './DayCell.styled';

const DayCell: React.FC<DayCellProps> = ({
  day,
  dayTrainings,
  isCurrentMonth,
}) => {
  const isWeekend = [6, 0].includes(day.getDay());
  const isToday = isSameDay(day, new Date());
  const isTrainingDay = dayTrainings.length > 0;

  return (
    <S.DayCell isOtherMonth={!isCurrentMonth} isWeekend={isWeekend}>
      <Tooltip title={dayTrainings.map((t) => t.title).join(', ')} arrow>
        <S.DayNumber isTraining={isTrainingDay} isToday={isToday}>
          {format(day, 'd')}
        </S.DayNumber>
      </Tooltip>
    </S.DayCell>
  );
};

export default DayCell;
