import { Controller, FieldValues } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateFieldProps } from '@/app/types';

const DateField = <T extends FieldValues>({
  control,
  name,
  label,
}: DateFieldProps<T>) => {

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (value) => value != null || 'Введите дату',
      }}
      render={({ field }) => (
        <DatePicker
          label={label}
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
  );
};

export default DateField;
