import Link from 'next/link';
import React from 'react';
import * as S from './Header.styled';

const NavItem = React.memo(
  ({ item, pathname }: { item: any; pathname: any }) => (
    <Link href={item.path} passHref prefetch={false}>
      <S.NavButton active={pathname === item.path}>{item.label}</S.NavButton>
    </Link>
  ),
);

export default NavItem;
