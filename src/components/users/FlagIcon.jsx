import React from "react";
import classNames from "classnames";
import * as solidIcon from "@heroicons/react/24/solid";
import * as outlineIcon from "@heroicons/react/24/outline";
import { Flags } from "../../hooks";

const Icon = ({ flag, type, ...props }) => {
  const iconType = type === "solid" ? solidIcon : outlineIcon;
  switch (flag) {
    case Flags.LOGGED_IN:
      return <iconType.ArrowRightOnRectangleIcon {...props} />;
    case Flags.SENT_PHOTOS:
      return <iconType.PhotoIcon {...props} />;
    case Flags.SURVEY_FINISHED:
      return <iconType.RectangleStackIcon {...props} />;
    case Flags.HAS_ROUTINE:
      return <iconType.SparklesIcon {...props} />;
    case Flags.BOUGHT:
      return <iconType.ShoppingBagIcon {...props} />;
    default:
      return null;
  }
};

const FlagIcon = ({ user, flag }) => (
  <Icon
    flag={flag}
    type={user.flags?.[flag] ? "solid" : "outline"}
    className={classNames(
      "h-4 w-4 inline-block",
      user.flags?.[flag] ? "text-green-400" : "text-red-400",
    )}
  />
);

export default FlagIcon;
