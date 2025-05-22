import Link from 'next/link';
import * as S from './SecondaryButtons.styled';
import { ButtonProps } from '@/app/types';

const ButtonRegister: React.FC<ButtonProps> = ({ toggleDrawer }) => {
  return (
    <Link href="/register" passHref onClick={toggleDrawer} prefetch={false}>
      <S.SecondaryButton variant="outlined" fullWidth>
        Регистрация
      </S.SecondaryButton>
    </Link>
  );
};

export default ButtonRegister;
