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

          <S.SubmitButton type="submit" variant="contained" fullWidth>
            Добавить запись
          </S.SubmitButton>
        </form>
      </S.FormContainer>
    </LocalizationProvider>
  );
};

export default AddForm;
