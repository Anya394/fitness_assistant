import { styled } from '@mui/material/styles';
import { Typography, IconButton } from '@mui/material';
import { theme } from '@/app/Theme';

export const CalendarHeader = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px',
});

export const MonthTitle = styled(Typography)({
  fontWeight: 600,
  color: theme.text,
  fontSize: '1.5rem',
  letterSpacing: '0.5px',
  textAlign: 'center',
  flex: 1,
});

export const NavigationButton = styled(IconButton)({
  color: theme.primary,
  '&:hover': {
    backgroundColor: 'rgba(76, 114, 176, 0.1)',
  },
});
