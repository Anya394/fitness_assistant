import React, { useState } from 'react';
import WeightProgressChart from '@/entities/WeightProgressChart/WeightProgressChart';
import * as S from './WeighingWidget.styled';
import AddWeightForm from '@/features/Forms/AddDataForms/AddWeightForm';
import { WeightFormData } from '@/app/types';

import { Dialog } from '@mui/material';
import SubmitButton from '@/entities/Buttons/SubmitButton/SubmitButton';
import { defaultWeightData } from '@/app/atomStorage';
import { useAtom } from 'jotai';

const WeighingWidget = React.memo(() => {
  const [openDialog, setOpenDialog] = useState(false);
  const [weightData, setWeightData] = useAtom(defaultWeightData);

  const handleSetData = (data: WeightFormData) => {
    setWeightData((prev) => [
      ...prev,
      {
        date: data.date,
        weight: parseFloat(data.weight),
      },
    ]);

    setOpenDialog(false);
  };

  return (
    <S.Dashboard>
      <S.Title>Прогресс взвешиваний</S.Title>
      <div className="dashboard-container">
        <div className="chart-container">
          <WeightProgressChart data={weightData} />
        </div>
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
        <AddWeightForm handleSetData={handleSetData} />
      </Dialog>
    </S.Dashboard>
  );
});

WeighingWidget.displayName = 'WeighingWidget';
export default WeighingWidget;
