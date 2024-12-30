'use client';
import ButtonApp from '@components/ui/button';
import SwitchTheme from '@components/ui/switch-theme';
import { useAppContext } from '@hooks/use-app-context';
import { Button } from 'antd';
import React from 'react';

export default function LoginPage() {
  const { locale, handleChangeLocale } = useAppContext();
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  console.log({ isDarkMode });
  return (
    <div className="">
      <ButtonApp />
      <Button
        onClick={() => {
          handleChangeLocale(locale === 'vi' ? 'en' : 'vi');
        }}
      >
        change language
      </Button>
      <SwitchTheme />
    </div>
  );
}
