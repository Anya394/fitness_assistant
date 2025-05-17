import styled from 'styled-components';
import { theme } from '@/app/Theme';

export const FormContainer = styled.div`
  max-width: 420px;
  margin: 2rem auto;
  padding: 2.5rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SubmitButton = styled.button`
  padding: 1rem;
  background-color: ${theme.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  letter-spacing: 0.5px;

  &:hover {
    background-color: #3a5a8a;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(76, 114, 176, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #bdc3d1;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const FormError = styled.div`
  color: #e74c3c;
  text-align: center;
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 8px;
  background-color: #fdecea;
  font-size: 0.9rem;
  border: 1px solid #fadbd8;
`;
