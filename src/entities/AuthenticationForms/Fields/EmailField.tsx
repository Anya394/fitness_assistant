import { FieldProps } from '@/app/types';
import * as S from './Field.styles';

const EmailField: React.FC<FieldProps> = ({ register, errors }) => {
  return (
    <S.InputGroup>
      <S.Label htmlFor="email">Электронная почта</S.Label>
      <S.Input
        id="email"
        type="email"
        {...register('email', {
          required: 'Email обязателен',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Пожалуйста, введите корректный адрес',
          },
        })}
        placeholder="Введите ваш email"
      />
      <S.ErrorText>{errors.email?.message}</S.ErrorText>
    </S.InputGroup>
  );
};

export default EmailField;
