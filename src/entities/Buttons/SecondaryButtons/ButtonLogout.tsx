import { isLoggedInAtom } from '@/app/atomStorage';
import { useAtom } from 'jotai';
import Link from 'next/link';
import router from 'next/router';
import * as S from './SecondaryButtons.styled';
import { ButtonProps } from '@/app/types';

const ButtonLogout: React.FC<ButtonProps> = ({ toggleDrawer }) => {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setIsLoggedIn(false);
        router.push('/');
      } else {
        const data = await response.json();
        console.log(data.error || 'Logout failed');
      }
    } catch (err) {
      console.log('An error occurred. Please try again.');
    }

    if (toggleDrawer) toggleDrawer();
  };

  return (
    <Link href="/" passHref onClick={() => handleLogout()}>
      <S.SecondaryButton variant="contained" fullWidth>
        Выйти
      </S.SecondaryButton>
    </Link>
  );
};

export default ButtonLogout;
