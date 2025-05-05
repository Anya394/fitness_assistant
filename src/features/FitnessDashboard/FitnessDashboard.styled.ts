import { theme } from '@/app/Theme';
import styled, { css } from 'styled-components';

export const Dashboard = styled.div`
  .chart-container {
    margin: 20px 0;
    border: 1px solid #eaeaea;
    border-radius: 12px;
    padding: 16px;
    background: white;
    transition: box-shadow 0.3s ease;
  }

  .chart-container:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  .weight-input {
    display: flex;
    gap: 12px;
    margin-top: 24px;
    align-items: center;
  }

  .weight-input input {
    padding: 10px 16px;
    border: 1px solid #ddd;
    border-radius: 6px;
    flex-grow: 1;
    font-size: 16px;
    transition: border 0.3s ease;
  }

  .weight-input input:focus {
    outline: none;
    border-color: ${theme.primary};
    box-shadow: 0 0 0 2px rgba(76, 114, 176, 0.2);
  }

  .weight-input button {
    padding: 10px 20px;
    background-color: ${theme.primary};
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .weight-input button:hover {
    background-color: ${theme.secondary};
    transform: translateY(-1px);
  }
`;
