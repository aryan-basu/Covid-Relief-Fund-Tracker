import React, { createContext, useContext, useState } from 'react';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  //! SETTING A DUMMY USER /////////////////////////////////////
  const [user, setUser] = useState(null);

  const loginUser = () => {
    setUser({
      id: String(Math.random()),
      userName: 'John Halo',
      email: 'john117@gmail.com',
      // Set true for admin, set false for user
      isAdmin: false,
    });
  };

  const logoutUser = () => {
    setUser(null);
  };
  //! ////////////////////////////////////////////////////////
  return (
    <userAuthContext.Provider
      value={{
        user,
        loginUser,
        logoutUser,
      }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
