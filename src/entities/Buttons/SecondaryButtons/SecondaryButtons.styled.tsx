import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { theme } from '@/app/Theme';

export const SecondaryButton = styled(Button)(() => ({
  backgroundColor: 'transparent',
  color: theme.primary,
  border: `1px solid ${theme.primary}`,
  borderRadius: '8px',
  padding: '8px 20px',
  fontWeight: 600,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.primary,
    color: '#fff',
  },
}));
