import { useForm, Controller } from 'react-hook-form';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TrainFormProps, TrainingData } from '@/app/types';
import * as S from './AddForm.styled';
import DateField from '@/entities/DateField/DateField';

const AddWorkoutForm: React.FC<TrainFormProps> = ({ handleSetData }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      date: new Date(),
      title: '',
    },
  });

  const onSubmit = (data: TrainingData) => {
    handleSetData(data);
    reset();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <S.FormContainer>
        <S.FormTitle>Добавить тренировку</S.FormTitle>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
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

          <S.SubmitButton type="submit" variant="contained" fullWidth>
            Добавить
          </S.SubmitButton>
        </form>
      </S.FormContainer>
    </LocalizationProvider>
  );
};

export default AddWorkoutForm;
