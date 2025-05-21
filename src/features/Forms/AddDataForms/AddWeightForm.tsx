'use client';

import { useForm, Controller } from 'react-hook-form';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AddFormProps, WeightFormData } from '@/app/types';
import * as S from './AddForm.styled';
import DateField from '@/entities/DateField/DateField';
import SubmitButton from '@/entities/Buttons/SubmitButton/SubmitButton';
import { Box } from '@mui/material';

const AddWeightForm: React.FC<AddFormProps> = ({ handleSetData }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      date: new Date(),
      weight: '',
    },
  });

  const onSubmit = (data: WeightFormData) => {
    handleSetData(data);
    reset();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <S.FormContainer>
        <S.FormTitle>Добавить взвешивание</S.FormTitle>
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
              label="Дата взвешивания"
            />
          </S.FormField>

          <S.FormField>
            <Controller
              name="weight"
              control={control}
              rules={{
                validate: (value) =>
                  (parseFloat(value) >= 30 && parseFloat(value) <= 300) ||
                  'Вес должен быть 30-300 кг',
              }}
              render={({ field, fieldState: { error } }) => (
                <S.StyledTextField
                  {...field}
                  label="Вес (кг)"
                  type="number"
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
};

export default AddWeightForm;
