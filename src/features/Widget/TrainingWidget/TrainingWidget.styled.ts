import { theme } from '@/app/Theme';
import styled from 'styled-components';

export const Training = styled.div`
  .dashboard-container {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: ${theme.primary};
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 18px;
  text-align: center;
`;
