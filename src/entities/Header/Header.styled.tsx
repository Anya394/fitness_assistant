import { styled } from '@mui/material/styles';
import { AppBar, Button, Typography } from '@mui/material';
import { theme } from '@/app/Theme';
import { NavButtonProps } from '@/app/types';

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: theme.background,
  color: theme.primary,
  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  transition: 'all 0.3s ease',
  padding: '0 5%',
  position: 'sticky',
  top: 0,
  zIndex: 1100,
  '&:hover': {
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  },
}));

export const LogoText = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: '1.5rem',
  color: theme.secondary,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
}));

export const LogoAccent = styled('span')(() => ({
  color: theme.primary,
}));

export const NavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<NavButtonProps>(({ active }) => ({
  color: active ? theme.primary : theme.text,
  fontWeight: 500,
  textTransform: 'none',
  fontSize: '1rem',
  position: 'relative',
  whiteSpace: 'nowrap',
  minWidth: 'auto',
  padding: '8px 12px',
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.primary,
    '&::after': { width: '100%' },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 4,
    left: 0,
    width: active ? '100%' : 0,
    height: '2px',
    backgroundColor: theme.secondary,
    transition: 'width 0.3s ease',
  },
}));
