import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { theme } from '@/app/Theme';

export const CalendarContainer = styled(Paper)({
  padding: '24px',
  width: '500px',
  margin: '0 auto',
  backgroundColor: theme.background,
  borderRadius: '12px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  minHeight: '400px', // Фиксированная высота
});
