import React, { useState } from "react";
import classNames from "classnames";
import UsersList from "../components/users/UsersList";
import RegistrationsList from "../components/registrations/RegistrationsList";

const Sidebar = () => {
  const [mode, setMode] = useState("users");

  return (
    <div className="relative w-72 shrink-0">
      <div className="absolute top-0 left-0 right-0 h-20 bg-slate-900 border-b border-slate-500">
        <div className="flex mt-6 justify-center">
          <button
            onClick={() => setMode("users")}
            type="button"
            className={classNames("px-3 py-0.5 border border-slate-300 text-sm rounded-l-lg", { "bg-slate-300 text-black": mode === "users" })}
          >
            Usuarios
          </button>
          <button
            onClick={() => setMode("registrations")}
            type="button"
            className={classNames("px-3 py-0.5 border border-slate-300 text-sm rounded-r-lg", { "bg-slate-300 text-black": mode === "registrations" })}
          >
            Registros
          </button>
        </div>
      </div>
      <div className="h-screen overflow-scroll scrollbar-hide border-r border-slate-700 pt-20">
        {mode === "users" && <UsersList />}
        {mode === "registrations" && <RegistrationsList />}
      </div>
    </div>
  );
};

export default Sidebar;
