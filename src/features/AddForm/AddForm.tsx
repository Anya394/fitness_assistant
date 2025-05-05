import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AddFormProps, WeightFormData } from '@/app/types';
import * as S from './AddForm.styled';

const AddForm: React.FC<AddFormProps> = ({ handleSetWeightData }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      date: new Date(),
      weight: '',
    },
  });

  const onSubmit = (data: WeightFormData) => {
    handleSetWeightData(data);
    reset();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <S.FormContainer>
        <S.FormTitle>Добавить новое взвешивание</S.FormTitle>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <S.FormField>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  label="Дата взвешивания"
                  maxDate={new Date()}
                  value={field.value}
                  onChange={field.onChange}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                    },
                  }}
                />
              )}
            />
          </S.FormField>

          <S.FormField>
            <Controller
              name="weight"
              control={control}
              rules={{
                required: 'Введите вес',
                min: { value: 30, message: 'Минимум 30 кг' },
                max: { value: 300, message: 'Максимум 300 кг' },
                pattern: {
                  value: /^\d*\.?\d+$/,
                  message: 'Введите число (например: 72.5)',
                },
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

          <S.SubmitButton type="submit" variant="contained" fullWidth>
            Добавить запись
          </S.SubmitButton>
        </form>
      </S.FormContainer>
    </LocalizationProvider>
  );
};

export default AddForm;
