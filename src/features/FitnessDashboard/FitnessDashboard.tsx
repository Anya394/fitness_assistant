import React, { useState } from 'react';
import WeightProgressChart from '@/entities/WeightProgressChart';
import * as S from './FitnessDashboard.styled';
import AddForm from '@/features/AddForm/AddForm';

const FitnessDashboard: React.FC = () => {
  const [weightData, setWeightData] = useState([
    { date: new Date(2025, 3, 1), weight: 75.5 },
    { date: new Date(2025, 3, 5), weight: 74.8 },
    { date: new Date(2025, 3, 10), weight: 74.2 },
    { date: new Date(2025, 3, 15), weight: 73.9 },
    { date: new Date(2025, 3, 20), weight: 73.5 },
    { date: new Date(2025, 3, 25), weight: 73.0 },
    { date: new Date(2025, 3, 30), weight: 72.7 },
  ]);

  const handleSetWeightData = (data: { date: Date; weight: string }) => {
    setWeightData([
      ...weightData,
      {
        date: data.date,
        weight: parseFloat(data.weight),
      },
    ]);
  };

  return (
    <S.Dashboard>
      <div className="fitness-dashboard">
        <h1>Прогресс взвешиваний</h1>
        <div className="chart-container">
          <WeightProgressChart data={weightData} />
        </div>

        <AddForm handleSetWeightData={handleSetWeightData} />
      </div>
    </S.Dashboard>
  );
};

export default FitnessDashboard;
