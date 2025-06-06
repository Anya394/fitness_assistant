import { theme } from '@/app/Theme';
import styled from 'styled-components';
import { TextField } from '@mui/material';

// Стилизованные компоненты
export const FormContainer = styled.div`
  background-color: ${theme.background};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  max-width: 600px;
  border: 1px solid ${theme.grid};
`;

export const FormTitle = styled.h2`
  color: ${theme.primary};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
`;

export const FormField = styled.div`
  margin-bottom: 20px;
`;

export const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 8px;
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.primary};
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.primary};
      border-width: 1px;
    }
  }
`;
