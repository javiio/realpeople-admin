import React from "react";
import classNames from "classnames";
import { useScreens, Screens, useUsers } from "../hooks";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const { screen, setScreen } = useScreens();
  const { selectedUser } = useUsers();

  const openWhatsapp = () => {
    window.open(`https://api.whatsapp.com/send/?phone=${selectedUser.id}`, "_blank", "noreferrer");
  };

  return (
    <div className="h-20 absolute left-72 top-0 right-0 border-b border-slate-500 bg-slate-900 z-40">
      {selectedUser && (
        <div className="flex mt-6 justify-center">
          <button
            onClick={() => setScreen(Screens.USERS_CREATE_ROUTINE)}
            type="button"
            className={classNames("px-3 py-0.5 border border-slate-300 text-sm rounded-l-lg", { "bg-slate-300 text-black": screen === Screens.USERS_CREATE_ROUTINE })}
          >
            Rutina
          </button>
          <button
            onClick={() => setScreen(Screens.USER_SHOW_PROFILE)}
            type="button"
            className={classNames("px-3 py-0.5 border border-slate-300 text-sm rounded-r-lg", { "bg-slate-300 text-black": screen === Screens.USER_SHOW_PROFILE })}
          >
            Perfil
          </button>

          <button
            onClick={openWhatsapp}
            type="button"
            className="px-3 py-0.5 border border-slate-300 text-sm rounded-lg ml-8"
          >
            <ChatBubbleBottomCenterTextIcon className="inline-block h-5 w-5 mr-2" />
            Whastapp
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
