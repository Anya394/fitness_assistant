import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const SecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '8px',
  padding: '8px 20px',
  fontWeight: 600,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
}));
