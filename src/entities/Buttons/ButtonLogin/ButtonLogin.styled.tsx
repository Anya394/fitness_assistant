import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { theme } from '@/app/Theme';

export const PrimaryButton = styled(Button)(() => ({
  backgroundColor: theme.primary,
  color: '#fff',
  borderRadius: '8px',
  padding: '8px 20px',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: theme.secondary,
    boxShadow: '0 4px 8px rgba(221, 132, 82, 0.3)',
  },
}));
