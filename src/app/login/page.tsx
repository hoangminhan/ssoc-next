'use client';
import ButtonApp from '@components/ui/button';
import { useAppContext } from '@hooks/use-app-context';
import React from 'react';

export default function LoginPage() {
  const { locale, handleChangeLocale } = useAppContext();
  return (
    <div>
      <ButtonApp />
      <button
        onClick={() => {
          handleChangeLocale(locale === 'vi' ? 'en' : 'vi');
        }}
      >
        change language
      </button>
    </div>
  );
}
