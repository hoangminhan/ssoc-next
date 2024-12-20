import { createContext, useState } from 'react';
import type { AppLocale } from 'types/commons';
interface IContextApp {
  locale: AppLocale;
  isAuthenticated: boolean;
  handleChangeLocale: (locale: AppLocale) => void;
  setAuthenticated: (authenticated: boolean) => void;
}

// create defaul values
const defaultValues: IContextApp = {
  locale: 'vi',
  isAuthenticated: false,
  handleChangeLocale: () => {},
  setAuthenticated: () => {},
};

// create context
export const AppContext = createContext<IContextApp>(defaultValues);

// create a provide component

interface IAppProviderProp {
  children: React.ReactNode;
}
export const AppProvide = ({ children }: IAppProviderProp) => {
  const [locale, setLocale] = useState<AppLocale>(() => {
    const currentLocale = localStorage.getItem('locale');
    if (currentLocale === 'vi' || currentLocale === 'en') {
      return currentLocale;
    } else {
      return defaultValues.locale;
    }
  });
  const [isAuthenticated, setAuthenticated] = useState(false);
  const handleChangeLocale = (newLocale: AppLocale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };
  return (
    <AppContext.Provider
      value={{
        locale,
        handleChangeLocale,
        isAuthenticated,
        setAuthenticated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
