import React, { useState } from 'react';
import * as S from './TrainingWidget.styled';
import { TrainingData } from '@/app/types';
import TrainingCalendar from '../../../entities/Calendar/TrainingCalendar/TrainingCalendar';
import AddWorkoutForm from '../../Forms/AddDataForms/AddWorkoutForm';
import { defaultTrainingData } from '@/app/atomStorage';
import { useAtom } from 'jotai';
import { Dialog } from '@mui/material';
import SubmitButton from '@/entities/Buttons/SubmitButton/SubmitButton';

const TrainingWidget: React.FC = () => {
  const [trainingData, setTrainingData] = useAtom(defaultTrainingData);
  const [openDialog, setOpenDialog] = useState(false);

  const handleSetData = (data: TrainingData) => {
    setTrainingData([
      ...trainingData,
      {
        date: data.date,
        title: data.title,
      },
    ]);

    setOpenDialog(false);
  };

  return (
    <S.Training>
      <S.Title>Тренировки</S.Title>
      <div className="dashboard-container">
        <TrainingCalendar />
      </div>

      <SubmitButton handleClick={() => setOpenDialog(true)} />

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        slotProps={{
          paper: {
            sx: {
              borderRadius: '12px',
              p: 2,
              width: 'auto',
              maxWidth: 'none',
              minWidth: '300px',
            },
          },
        }}
      >
        <AddWorkoutForm handleSetData={handleSetData} />
      </Dialog>
    </S.Training>
  );
};

export default TrainingWidget;
