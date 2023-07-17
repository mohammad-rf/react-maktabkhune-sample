import React, { useContext, useEffect, useState } from "react";

const UserContext = React.createContext();

export function useAuth() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const value = {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
  };
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}
