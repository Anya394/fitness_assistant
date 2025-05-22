'use client';

import { useForm, Controller } from 'react-hook-form';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TrainFormProps, TrainingData } from '@/app/types';
import * as S from './AddForm.styled';
import DateField from '@/entities/DateField/DateField';
import { useState } from 'react';
import SubmitButton from '@/entities/Buttons/SubmitButton/SubmitButton';
import { Box } from '@mui/material';
import React from 'react';

const AddWorkoutForm: React.FC<TrainFormProps> = React.memo(
  ({ handleSetData, onSubmit }) => {
    const [TodayDate] = useState(new Date());

    const { control, handleSubmit, reset } = useForm({
      defaultValues: {
        date: TodayDate,
        title: '',
      },
    });

    const onSubmitRes = (data: TrainingData) => {
      handleSetData(data);
      reset();
    };

    if (!onSubmit) onSubmit = onSubmitRes;

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <S.FormContainer>
          <S.FormTitle>Добавить тренировку</S.FormTitle>
          <Box
            component="form"
            sx={{
              width: { xs: '90vw', sm: '400px', md: '500px' },
              p: { xs: 2, md: 3 },
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <S.FormField>
              <DateField
                control={control}
                name={'date'}
                label="Дата тренировки"
              />
            </S.FormField>

            <S.FormField>
              <Controller
                name="title"
                control={control}
                rules={{
                  validate: (value) => value != '' || 'Введите название',
                }}
                render={({ field, fieldState: { error } }) => (
                  <S.StyledTextField
                    {...field}
                    label="Название"
                    type="text"
                    fullWidth
                    variant="outlined"
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </S.FormField>

            <SubmitButton />
          </Box>
        </S.FormContainer>
      </LocalizationProvider>
    );
  },
);

AddWorkoutForm.displayName = 'AddWorkoutForm';
export default AddWorkoutForm;
