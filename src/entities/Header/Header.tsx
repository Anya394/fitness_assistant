'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Toolbar,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
} from '@mui/material';
import * as S from './Header.styled';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from '@/app/atomStorage';
import ButtonLogout from '../Buttons/SecondaryButtons/ButtonLogout';
import ButtonLogin from '../Buttons/ButtonLogin/ButtonLogin';
import ButtonRegister from '../Buttons/SecondaryButtons/ButtonRegister';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn] = useAtom(isLoggedInAtom);
  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { label: 'Главная', path: '/' },
    { label: 'Взвешивания', path: '/weight' },
    { label: 'Тренировки', path: '/training' },
  ];

  return (
    <S.StyledAppBar position="static">
      <Toolbar
        sx={{ justifyContent: 'space-between', px: { xs: 2, md: '5%' } }}
      >
        <Link href="/" passHref>
          <S.LogoText variant="h6">
            <S.LogoAccent>Fitness</S.LogoAccent>Assistant
          </S.LogoText>
        </Link>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} passHref>
              <S.NavButton active={pathname === item.path}>
                {item.label}
              </S.NavButton>
            </Link>
          ))}
        </Box>

        <Box>
          {!isLoggedIn && (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <ButtonLogin />
              <ButtonRegister />
            </Box>
          )}
          {isLoggedIn && (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <ButtonLogout />{' '}
            </Box>
          )}
        </Box>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              width: '80%',
              maxWidth: 300,
              p: 3,
            },
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <Link href={item.path} passHref onClick={toggleDrawer}>
                <S.NavButton
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                  active={pathname === item.path}
                >
                  {item.label}
                </S.NavButton>
              </Link>
            </ListItem>
          ))}

          <Box>
            {!isLoggedIn && (
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}
              >
                <ButtonLogin toggleDrawer={toggleDrawer} />
                <ButtonRegister toggleDrawer={toggleDrawer} />
              </Box>
            )}
            {isLoggedIn && <ButtonLogout toggleDrawer={toggleDrawer} />}
          </Box>
        </List>
      </Drawer>
    </S.StyledAppBar>
  );
}
