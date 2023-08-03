import React from "react";
import RegistrationInfo from "../components/registrations/RegistrationInfo";
import { useRegistrations } from "../hooks";

const RegistrationInfoView = () => {
  const { selectedRegistration } = useRegistrations();

  return (
    <div className="mt-24">
      <RegistrationInfo registration={selectedRegistration} />
    </div>
  );
};

export default RegistrationInfoView;
