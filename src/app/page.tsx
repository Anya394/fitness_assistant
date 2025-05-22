'use client';

import React from 'react';
import * as S from './homeStyles';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TimelineIcon from '@mui/icons-material/Timeline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';

const HomePage = () => {
  const features = [
    {
      icon: <TimelineIcon style={{ fontSize: '3rem' }} />,
      title: 'Отслеживание прогресса',
      description:
        'Визуализируйте ваш прогресс с помощью красивых графиков и диаграмм.',
    },
    {
      icon: <CalendarTodayIcon style={{ fontSize: '3rem' }} />,
      title: 'Календарь тренировок',
      description:
        'Планируйте и отслеживайте ваши тренировки с удобным календарем.',
    },
    {
      icon: <FitnessCenterIcon style={{ fontSize: '3rem' }} />,
      title: 'Анализ показателей',
      description: 'Получайте детальную статистику по вашим результатам.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#f9f9f9' }}>
      <S.HeroSection>
        <S.Container>
          <S.HeroTitle>Достигайте своих фитнес-целей</S.HeroTitle>
          <S.HeroSubtitle>
            Отслеживайте прогресс, планируйте тренировки и анализируйте
            результаты
          </S.HeroSubtitle>
          <S.StartButton as="a" href="/login">
            Начать бесплатно
          </S.StartButton>
        </S.Container>
      </S.HeroSection>

      <S.Container>
        <S.SectionTitle>Почему выбирают нас</S.SectionTitle>
        <S.GridContainer>
          {features.map((feature, index) => (
            <S.FeatureCard key={index}>
              <S.FeatureContent>
                <S.FeatureIcon>{feature.icon}</S.FeatureIcon>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </S.FeatureContent>
            </S.FeatureCard>
          ))}
        </S.GridContainer>
      </S.Container>

      <S.StatsSection>
        <S.Container>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '48px',
              padding: '64px 0',
            }}
          >
            <div style={{ flex: 1 }}>
              <h2
                style={{
                  fontWeight: 600,
                  marginBottom: '24px',
                  fontSize: '2.25rem',
                }}
              >
                Красивые графики и удобный интерфейс
              </h2>
              <p style={{ marginBottom: '24px' }}>
                Наши интерактивные графики помогут вам визуализировать ваш
                прогресс и понять динамику изменений.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Календарь тренировок позволяет легко планировать и отслеживать
                ваши занятия.
              </p>
              <S.CTAButton as="a" href="/">
                Узнать больше
              </S.CTAButton>
            </div>
            <div style={{ flex: 1 }}>
              <S.Screenshot src="/app-preview.jpg" alt="App Preview" />
            </div>
          </div>
        </S.Container>
      </S.StatsSection>

      <S.Container>
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <PeopleIcon
            style={{ fontSize: '4rem', color: '#DD8452', marginBottom: '24px' }}
          />
          <h2
            style={{
              fontWeight: 600,
              marginBottom: '24px',
              fontSize: '2.25rem',
            }}
          >
            Присоединяйтесь к тысячам довольных пользователей
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '40px' }}>
            Начните свой путь к лучшей версии себя уже сегодня
          </p>
          <S.CTAButton
            as="a"
            href="/register"
            style={{ fontSize: '1.2rem', padding: '15px 45px' }}
          >
            Зарегистрироваться
          </S.CTAButton>
        </div>
      </S.Container>
    </div>
  );
};

export default HomePage;
