import { FieldProps } from '@/app/types';
import * as S from './Field.styles';

const PasswordField: React.FC<FieldProps> = ({ register, errors }) => {
  return (
    <S.InputGroup>
      <S.Label htmlFor="password">Пароль</S.Label>
      <S.Input
        id="password"
        type="password"
        {...register('password', {
          required: 'Пароль обязателен',
          minLength: {
            value: 4,
            message: 'Пароль должен содержать минимум 4 символа',
          },
        })}
        placeholder="Введите ваш пароль"
      />
      <S.ErrorText>{errors.password?.message}</S.ErrorText>
    </S.InputGroup>
  );
};

export default PasswordField;
