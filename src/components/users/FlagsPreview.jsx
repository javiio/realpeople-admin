import React from "react";
import FlagIcon from "./FlagIcon";
import { Flags } from "../../hooks";

const FlagsPreview = ({ user }) => (
  <div className="flex space-x-3 mt-1">
    <FlagIcon user={user} flag={Flags.LOGGED_IN} />
    <FlagIcon user={user} flag={Flags.SENT_PHOTOS} />
    <FlagIcon user={user} flag={Flags.SURVEY_FINISHED} />
    <FlagIcon user={user} flag={Flags.HAS_ROUTINE} />
    <FlagIcon user={user} flag={Flags.BOUGHT} />
  </div>
);

export default FlagsPreview;
