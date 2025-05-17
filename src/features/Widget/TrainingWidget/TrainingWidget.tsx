import React from 'react';
import * as S from './TrainingWidget.styled';
import { TrainingData } from '@/app/types';
import TrainingCalendar from '../../../entities/Calendar/TrainingCalendar/TrainingCalendar';
import AddWorkoutForm from '../../Forms/AddDataForms/AddWorkoutForm';
import { defaultTrainingData } from '@/app/atomStorage';
import { useAtom } from 'jotai';

const TrainingWidget: React.FC = () => {
  const [trainingData, setTrainingData] = useAtom(defaultTrainingData);

  const handleSetData = (data: TrainingData) => {
    setTrainingData([
      ...trainingData,
      {
        date: data.date,
        title: data.title,
      },
    ]);
  };

  return (
    <S.Training>
      <div className="dashboard-container">
        <TrainingCalendar />
        <AddWorkoutForm handleSetData={handleSetData} />
      </div>
    </S.Training>
  );
};

export default TrainingWidget;
