import styled from 'styled-components';
import { theme } from '@/app/Theme';

export const FormTitle = styled.h2`
  text-align: center;
  color: ${theme.text};
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  position: relative;
  padding-bottom: 0.8rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${theme.primary};
    border-radius: 3px;
  }
`;
