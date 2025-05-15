import { isLoggedInAtom } from '@/app/atomStorage';
import { useAtom } from 'jotai';
import Link from 'next/link';
import router from 'next/router';
import { SecondaryButton } from './ButtonLogout.styled';
import { ButtonProps } from '@/app/types';

const ButtonLogout: React.FC<ButtonProps> = ({ toggleDrawer }) => {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);

  const handleLogout = async (isMobile: boolean) => {
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

    if (isMobile) toggleDrawer();
  };

  return (
    <Link href="/" passHref onClick={() => handleLogout(false)}>
      <SecondaryButton variant="contained" fullWidth>
        Выйти
      </SecondaryButton>
    </Link>
  );
};

export default ButtonLogout;
