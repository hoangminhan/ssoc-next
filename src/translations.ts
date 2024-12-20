import type { AppLocale } from 'types/commons';

type ITranslations = {
  [key in AppLocale]: {
    [key: string]: string;
  };
};
export const translations: ITranslations = {
  en: {
    hello: 'Hello',
    goodbye: 'Goodbye',
  },
  vi: {
    hello: 'Xin chào',
    goodbye: 'Tạm biệt',
  },
};
