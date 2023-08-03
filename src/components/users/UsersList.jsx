import React from "react";
import classNames from "classnames";
import { useUsers, useScreens, Screens } from "../../hooks";
import { Loader } from "../common";
import FlagsPreview from "./FlagsPreview";

const UsersList = () => {
  const {
    users, selectedUser, setSelectedUser, isLoading,
  } = useUsers();
  const { setScreen } = useScreens();

  const onSelectUser = (user) => {
    setSelectedUser(user);
    setScreen(Screens.USERS_CREATE_ROUTINE);
  };

  return (
    <div>
      {isLoading && <Loader />}

      {users.map((user) => (
        <div
          onClick={() => onSelectUser(user)}
          key={user.id}
          className={classNames(
            "border-b border-gray-300 p-4 hover:bg-slate-700 hover:cursor-pointer",
            { "bg-slate-100 text-slate-800 hover:bg-slate-300": selectedUser && user.id === selectedUser.id },
          )}
          aria-hidden="true"
        >
          <span>{user.name}</span>
          <span className="text-gray-400 pl-3 text-base">{user.id}</span>

          <FlagsPreview user={user} />
        </div>
      ))}
    </div>
  );
};

export default UsersList;
