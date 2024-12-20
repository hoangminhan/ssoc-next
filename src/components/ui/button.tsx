'use client';
import { useTranslation } from '@hooks/use-translate';
import React from 'react';

export default function ButtonApp() {
  const { t } = useTranslation();
  return <div className="text-red-400">{t('hello')}</div>;
}
