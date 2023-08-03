import React from "react";
import FlagIcon from "./FlagIcon";
import { Switch } from "../common";
import { useUsers, Flags } from "../../hooks/useUsers";

const FlagFormItem = ({ label, flag }) => {
  const { selectedUser, updateFlag } = useUsers();

  return (
    <div className="flex space-x-3 mt-3 items-center">
      <FlagIcon user={selectedUser} flag={flag} />
      <Switch
        label={label}
        enabled={selectedUser.flags?.[flag] || false}
        onChange={(value) => updateFlag(flag, value)}
        fixedLabelWidth
      />
    </div>
  );
};

const FlagsForm = () => (
  <div>
    <h2>Opciones</h2>
    <div className="mb-4">
      <FlagFormItem label="Inició sesión" flag={Flags.LOGGED_IN} />
      <FlagFormItem label="Envió fotos" flag={Flags.SENT_PHOTOS} />
      <FlagFormItem label="Anamnesis" flag={Flags.SURVEY_FINISHED} />
      <FlagFormItem label="Tiene Rutina" flag={Flags.HAS_ROUTINE} />
      <FlagFormItem label="Compró" flag={Flags.BOUGHT} />
    </div>
  </div>
);

export default FlagsForm;
