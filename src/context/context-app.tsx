'use client';
import { keyLocalStorage } from 'constant';
import { createContext, useEffect, useState } from 'react';
import type { AppLocale, AppTheme } from 'types/commons';

interface IContextApp {
  locale: AppLocale;
  isAuthenticated: boolean;
  currentTheme: AppTheme;
  handleChangeLocale: (locale: AppLocale) => void;
  setAuthenticated: (authenticated: boolean) => void;
  handleSwitchTheme: (theme: AppTheme) => void;
}

// create defaul values
const defaultValues: IContextApp = {
  locale: 'vi',
  isAuthenticated: false,
  currentTheme: 'light',
  handleChangeLocale: () => {},
  setAuthenticated: () => {},
  handleSwitchTheme: () => {},
};

// create context
export const AppContext = createContext<IContextApp>(defaultValues);

// create a provide component

export const AppProvide = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<AppLocale>('vi');
  const [currentTheme, setCurrentTheme] = useState<AppTheme>('light');
  const [isReady, setIsReady] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const handleChangeLocale = (newLocale: AppLocale) => {
    setLocale(newLocale);
    localStorage.setItem(keyLocalStorage.locale, newLocale);
  };

  const handleSwitchTheme = (theme: AppTheme) => {
    const savedLocale = localStorage.getItem(keyLocalStorage.theme);
    if (savedLocale === theme) {
      return;
    }

    setCurrentTheme(theme);
    localStorage.setItem(keyLocalStorage.theme, theme);
    // if condition is true => add dark class else reomve dark class
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  };

  // initial current locale and theme of user
  useEffect(() => {
    setLocale(() => {
      const savedLocale = localStorage.getItem(keyLocalStorage.locale);
      if (savedLocale === 'vi' || savedLocale === 'en') {
        return savedLocale;
      } else {
        localStorage.setItem(keyLocalStorage.locale, 'vi');
        return 'vi';
      }
    });
    setCurrentTheme(() => {
      const savedTheme = localStorage.getItem(keyLocalStorage.theme);
      if (savedTheme === 'light' || savedTheme === 'dark') {
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        document.documentElement.classList.toggle('light', savedTheme === 'light');
        return savedTheme;
      } else {
        localStorage.setItem(keyLocalStorage.theme, 'light');
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
        return 'light';
      }
    });
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <p className="text-red-500">...loading</p>;
  }

  return (
    <AppContext.Provider
      value={{
        locale,
        handleChangeLocale,
        isAuthenticated,
        setAuthenticated,
        currentTheme,
        handleSwitchTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
