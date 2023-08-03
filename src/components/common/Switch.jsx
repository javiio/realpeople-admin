import React from "react";
import { Switch as SwitchUI } from "@headlessui/react";
import classNames from "classnames";

const Switch = ({ label, enabled, onChange, fixedLabelWidth = false, labelWidth = "w-36" }) => (
  <span>
    { label && (
      <label
        className={classNames(
          "inline-block mr-4",
          fixedLabelWidth && `${labelWidth}`,
        )}
      >
        {label}
      </label>
    )}
    <SwitchUI
      checked={enabled}
      onChange={onChange}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-400"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </SwitchUI>
  </span>
);

export default Switch;
