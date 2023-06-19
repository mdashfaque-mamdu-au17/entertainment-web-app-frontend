import { createContext, useState, useContext } from 'react';
import { getUserFromLocalStorage } from './utils/localStorage';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());

  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);
