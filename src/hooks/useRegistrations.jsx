import React, {
  useState,
  useContext,
  useEffect,
  createContext,
} from "react";
import { useFirebase } from "./useFirebase";

export const registrationsContext = createContext();

export const ProvideRegistrations = ({ children }) => {
  const [registrations, setRegistration] = useState([]);
  const [selectedRegistration, setSelectedRegistration] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { loadRegistrations } = useFirebase();

  const load = async () => {
    setIsLoading(true);

    const r = await loadRegistrations();
    setRegistration(r);
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => load(), 300);
  }, []);

  const value = {
    registrations,
    isLoading,
    selectedRegistration,
    setSelectedRegistration,
  };

  return <registrationsContext.Provider value={value}>{children}</registrationsContext.Provider>;
};

export const useRegistrations = () => useContext(registrationsContext);
