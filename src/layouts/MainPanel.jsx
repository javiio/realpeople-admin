import React from "react";
import { Screens, useScreens } from "../hooks";
import UserProfileView from "../views/UserProfileView";
import UserCreateRoutineView from "../views/UserCreateRoutineView";
import RegistrationInfoView from "../views/RegistrationInfoView";

const MainPanel = () => {
  const { screen } = useScreens();

  return (
    <div className="flex-1 shrink-0 h-screen overflow-scroll scrollbar-hide border">
      {screen === Screens.USER_SHOW_PROFILE && (
        <UserProfileView />
      )}
      {screen === Screens.USERS_CREATE_ROUTINE && (
        <UserCreateRoutineView />
      )}
      {screen === Screens.REGISTRATIONS_SHOW_INFO && (
        <RegistrationInfoView />
      )}
    </div>
  );
};

export default MainPanel;
