import Link from 'next/link';
import * as S from './ButtonLogin.styled';
import { ButtonProps } from '@/app/types';

const ButtonLogin: React.FC<ButtonProps> = ({ toggleDrawer }) => {
  return (
    <Link href="/login" passHref onClick={toggleDrawer}>
      <S.PrimaryButton variant="contained" fullWidth>
        Вход
      </S.PrimaryButton>
    </Link>
  );
};

export default ButtonLogin;
