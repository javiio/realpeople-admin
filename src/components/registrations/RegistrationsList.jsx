import React from "react";
import classNames from "classnames";
import { useRegistrations, useScreens, Screens } from "../../hooks";
import { Loader } from "../common";

const RegistrationsList = () => {
  const {
    registrations, selectedRegistration, setSelectedRegistration, isLoading,
  } = useRegistrations();
  const { setScreen } = useScreens();

  const onSelectRegistration = (r) => {
    setSelectedRegistration(r);
    setScreen(Screens.REGISTRATIONS_SHOW_INFO);
  };

  return (
    <div>
      {isLoading && <Loader />}

      {registrations.map((registration) => (
        <div
          onClick={() => onSelectRegistration(registration)}
          key={registration.id}
          className={classNames(
            "border-b border-gray-300 p-4 hover:bg-slate-700 hover:cursor-pointer",
            { "bg-slate-100 text-slate-800 hover:bg-slate-300": selectedRegistration && registration.id === selectedRegistration.id },
          )}
          aria-hidden="true"
        >
          <span>{registration.name}</span>
          <span className="text-gray-400 pl-3 text-base">{registration.phone}</span>
        </div>
      ))}
    </div>
  );
};

export default RegistrationsList;
