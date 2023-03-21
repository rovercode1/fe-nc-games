import { createContext } from 'react';
import { useState } from 'react';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser] = useState('cooljmessy');

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};