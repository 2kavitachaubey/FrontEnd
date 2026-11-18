import React, { createContext } from "react";
export const UserDataContext = createContext();

const UserContext = (props) => {
  const user = "Kavita";
  const age = 24;
  return (
    <UserDataContext.Provider value={{ user, age }}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
