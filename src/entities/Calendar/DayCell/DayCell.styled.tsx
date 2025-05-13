import { styled } from '@mui/material/styles';
import { theme } from '@/app/Theme';
import { DayCellStyleProps, DayNumberStyleProps } from '@/app/types';

export const DayCell = styled('div')<DayCellStyleProps>(
  ({ isOtherMonth, isWeekend }) => ({
    textAlign: 'center',
    padding: '4px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    opacity: isOtherMonth ? 0.4 : 1,
    color: isWeekend ? theme.weekend : theme.text,
  }),
);

export const DayNumber = styled('div')<DayNumberStyleProps>(
  ({ isTraining, isToday }) => ({
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isToday
      ? theme.secondary
      : isTraining
        ? theme.primary
        : 'transparent',
    color: isToday || isTraining ? '#fff' : 'inherit',
    fontWeight: isToday || isTraining ? 600 : 400,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: isToday
        ? theme.secondary
        : isTraining
          ? theme.secondary
          : 'rgba(0, 0, 0, 0.05)',
      transform: isToday || isTraining ? 'scale(1.1)' : 'scale(1.05)',
    },
  }),
);
