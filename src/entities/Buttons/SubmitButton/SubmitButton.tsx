import { SubmitButtonProps } from '@/app/types';
import * as S from './SubmitButton.styled';

const SubmitButton: React.FC<SubmitButtonProps> = ({
  text = 'Добавить',
  handleClick,
}) => {
  return (
    <S.SubmitButton
      type="submit"
      variant="contained"
      fullWidth
      onClick={handleClick}
    >
      {text}
    </S.SubmitButton>
  );
};

export default SubmitButton;
