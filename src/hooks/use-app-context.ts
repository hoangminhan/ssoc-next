import { AppContext } from 'context/context-app';
import { useContext } from 'react';

export const useAppContext = () => {
  const contextData = useContext(AppContext);
  if (!contextData) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return contextData;
};
