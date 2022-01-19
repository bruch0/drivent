import React, { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage("userData", {});

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
