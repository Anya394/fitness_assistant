import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { theme } from './Theme';

// Анимация для hover эффектов
const hoverScale = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const HeroSection = styled.section`
  background-color: ${theme.primary};
  color: ${theme.white};
  padding: 80px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

export const HeroTitle = styled.h1`
  font-weight: 700;
  margin-bottom: 24px;
  font-size: 3rem;
`;

export const HeroSubtitle = styled.h2`
  font-weight: 400;
  margin-bottom: 32px;
  font-size: 1.5rem;
`;

export const CTAButton = styled.button`
  background-color: ${theme.primary};
  color: white;
  border: none;
  padding: 15px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 24px;

  &:hover {
    background-color: #c9734a;
    transform: translateY(-2px);
  }
`;

export const StartButton = styled.button`
  background-color: #c9734a;
  font-size: 1.3rem;
  color: white;
  border: none;
  padding: 18px 45px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 24px;

  &:hover {
    background-color: ${theme.secondary};
    transform: translateY(-2px);
  }
`;

export const FeatureCard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
  border: 1px solid ${theme.grid};
  border-radius: 8px;
  overflow: hidden;
  background: ${theme.white};

  &:hover {
    animation: ${hoverScale} 0.3s forwards;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 3rem;
  color: ${theme.secondary};
  margin-bottom: 16px;
`;

export const FeatureContent = styled.div`
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-weight: 600;
  margin-top: 48px;
  text-align: center;
  font-size: 2.5rem;
  color: ${theme.text};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin: 50px 0;
`;

export const Screenshot = styled.img`
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid ${theme.grid};
  max-width: 100%;
  height: auto;
`;

export const StatsSection = styled.section`
  background-color: ${theme.white};
  padding: 64px 0;
`;
