import React, { createContext, useContext, useState } from 'react';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  //! SETTING A DUMMY USER
  const [user, setUser] = useState({
    id: String(Math.random()),
    userName: 'John Halo',
    email: 'john117@gmail.com',
  });

  //! /////////////////////

  return (
    <userAuthContext.Provider
      value={{
        user,
      }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
