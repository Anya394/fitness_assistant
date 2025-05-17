import styled from 'styled-components';
import { theme } from '@/app/Theme';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Label = styled.label`
  font-size: 0.95rem;
  color: ${theme.text};
  font-weight: 500;
  margin-left: 0.2rem;
`;

export const Input = styled.input`
  padding: 0.9rem 1.2rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #fafafa;

  &:focus {
    border-color: ${theme.primary};
    box-shadow: 0 0 0 3px rgba(76, 114, 176, 0.2);
    outline: none;
    background-color: white;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const ErrorText = styled.span`
  color: #e74c3c;
  font-size: 0.85rem;
  height: 1rem;
  margin-top: 0.2rem;
  margin-left: 0.3rem;
`;
