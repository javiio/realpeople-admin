import React, {
  useState,
  useContext,
  useEffect,
  createContext,
} from "react";
import { Timestamp } from "firebase/firestore";
import { useFirebase } from "./useFirebase";

export const Flags = Object.freeze({
  LOGGED_IN: "loggedIn",
  SURVEY_FINISHED: "surveyFinished",
  HAS_ROUTINE: "hasRoutine",
  SENT_PHOTOS: "sentPhotos",
  BOUGHT: "bought",
});

export const usersContext = createContext();

export const ProvideUsers = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { loadUsers, save } = useFirebase();

  const load = async () => {
    setIsLoading(true);

    const u = await loadUsers();
    setUsers(u);
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => load(), 300);
  }, []);

  const updateFlag = async (flag, value) => {
    const f = selectedUser.flags ?? {};
    f[flag] = value;
    selectedUser.flags = f;
    setSelectedUser({ ...selectedUser });
    await save(selectedUser, "users", selectedUser.id);
  };

  // const createUser = async (user) => {
  //   setIsLoading(true);
  //   user.createdAt = Timestamp.now();
  //   await save(user, "users", user.id);
  //   emptySections.map(async (section) => {
  //     await save(section, "users", user.id, "sections", section.id);
  //   });
  //   setIsLoading(false);
  // };

  const value = {
    users,
    isLoading,
    selectedUser,
    setSelectedUser,
    updateFlag,
    // createUser,
  };

  return <usersContext.Provider value={value}>{children}</usersContext.Provider>;
};

export const useUsers = () => useContext(usersContext);
