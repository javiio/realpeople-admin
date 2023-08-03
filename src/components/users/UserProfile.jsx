import React from "react";
import FlagsForm from "./FlagsForm";

const UserProfile = ({ user }) => {
  return (
    <div className="p-4">
      <h1>{user.name}</h1>

      <FlagsForm />
    </div>
  );
};

export default UserProfile;
