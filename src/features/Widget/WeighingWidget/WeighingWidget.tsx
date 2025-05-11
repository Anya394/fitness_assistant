import React, { useState } from 'react';
import WeightProgressChart from '@/entities/WeightProgressChart/WeightProgressChart';
import * as S from './WeighingWidget.styled';
import AddForm from '@/features/Forms/AddWeightForm';
import { WeightFormData } from '@/app/types';

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

  const handleSetData = (data: WeightFormData) => {
    setWeightData((prev) => [
      ...prev,
      {
        date: data.date,
        weight: parseFloat(data.weight),
      },
    ]);
  };

  return (
    <S.Dashboard>
      <S.Title>Прогресс взвешиваний</S.Title>
      <div className="dashboard-container">
        <div className="chart-container">
          <WeightProgressChart data={weightData} />
        </div>

        <div>
          <AddForm handleSetData={handleSetData} />
        </div>
      </div>
    </S.Dashboard>
  );
};

export default FitnessDashboard;
