import React, {
  useState,
  useContext,
  createContext,
} from "react";

export const Screens = Object.freeze({
  USER_SHOW_PROFILE: Symbol("USER_SHOW_PROFILE"),
  USERS_CREATE_ROUTINE: Symbol("USERS_CREATE_ROUTINE"),
  REGISTRATIONS_SHOW_INFO: Symbol("REGISTRATIONS_SHOW_INFO"),
});

export const screenContext = createContext();

export const ProvideScreens = ({ children }) => {
  const [screen, setScreen] = useState([]);

  const value = {
    screen,
    setScreen,
  };

  return <screenContext.Provider value={value}>{children}</screenContext.Provider>;
};

export const useScreens = () => useContext(screenContext);
