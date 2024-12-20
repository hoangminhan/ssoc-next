import { useEffect, useState } from 'react';
import { useAppContext } from './use-app-context';
import { translations } from 'translations';

export const useTranslation = () => {
  const { locale } = useAppContext();
  const [translation, setTranslation] = useState(translations[locale]);
  useEffect(() => {
    console.log({ locale });
    setTranslation(translations[locale]);
  }, [locale]);

  const t = (key: string) => translation[key];
  return { t };
};
