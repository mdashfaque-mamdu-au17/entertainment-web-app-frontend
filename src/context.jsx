import { createContext, useState, useContext } from 'react';
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from './utils/localStorage';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());

  const updateLoginUserInfo = (user) => {
    setUser(user);
  };

  const logoutUser = () => {
    removeUserFromLocalStorage();
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, updateLoginUserInfo, logoutUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
