import { theme } from '@/app/Theme';
import styled from 'styled-components';
import { Button } from '@mui/material';

export const SubmitButton = styled(Button)`
  && {
    background-color: ${theme.primary};
    color: white;
    padding: 12px;
    font-weight: 500;
    letter-spacing: 0.5px;
    border-radius: 8px;
    margin-top: 16px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${theme.secondary};
      transform: translateY(-2px);
    }
  }
`;
