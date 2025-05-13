import { theme } from '@/app/Theme';
import { styled } from '@mui/material/styles';

export const CalendarGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '4px',
});

export const Weekday = styled('div')<{ isWeekend?: boolean }>(
  ({ isWeekend }) => ({
    textAlign: 'center',
    padding: '8px 0',
    fontWeight: 500,
    color: isWeekend ? theme.weekend : theme.text,
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    opacity: 0.8,
  }),
);
