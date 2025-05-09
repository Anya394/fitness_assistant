import { theme } from '@/app/Theme';
import styled, { css } from 'styled-components';

export const Dashboard = styled.div`
  .chart-container {
    margin: 20px 0;
    border: 1px solid ${theme.grid};
    border-radius: 12px;
    padding: 16px;
    transition: box-shadow 0.3s ease;
  }

  .chart-container:hover {
    box-shadow: 0 8px 24px ${theme.grid};
  }

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
