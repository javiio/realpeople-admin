import React from "react";
import UserProfile from "../components/users/UserProfile";
import { useUsers } from "../hooks";

const UserProfileView = () => {
  const { selectedUser } = useUsers();

  return (
    <div className="mt-24">
      <UserProfile user={selectedUser} />
    </div>
  );
};

export default UserProfileView;
