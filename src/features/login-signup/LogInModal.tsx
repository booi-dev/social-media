import React from "react";
import { createPortal } from "react-dom";
import { IconType } from "react-icons";

import useThemeControls from "../../redux/control/themeControl";

import { CrossIcon } from "../../components/icons";
import { AppIcon, BackDrop } from "../../components/UI";

type LogInModalType = {
  iconDetail: { icon: IconType; color: "pri" | "pink" | "green" };
  title: string;
  text: string;
  closeHandler: () => void;
};

function LogInModal(props: LogInModalType) {
  const { iconDetail, title, text, closeHandler } = props;
  const { theme } = useThemeControls();

  const portal = document.getElementById("portal");

  let LogSignPortal: React.ReactPortal | React.ReactElement = <div />;

  if (portal) {
    LogSignPortal = createPortal(
      <div className={theme}>
        <div className="absolute top-0 bottom-0 z-20 flex w-full flex-col      justify-center rounded-sm bg-app-white-1 p-12 text-app-gray-1 shadow shadow-app-gray-3 dark:bg-app-black-1 dark:text-app-white-1 sm:top-1/2 sm:left-1/2 sm:w-[550px] sm:-translate-x-1/2 sm:-translate-y-1/2">
          <button
            type="button"
            className="absolute top-2 left-2"
            onClick={closeHandler}
          >
            <AppIcon icon={CrossIcon} size={25} hoverColor="pri" />
          </button>
          <div className="flex justify-center pb-6">
            <AppIcon
              icon={iconDetail.icon}
              size={30}
              color={iconDetail.color}
            />
          </div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-app-font-15 text-app-gray-3">{text}</p>
          <div className="mt-4 flex flex-col gap-4 [&>button]:rounded-sm [&>button]:py-2 [&>button]:font-bold">
            <button type="button" className="bg-pri-clr-1">
              Log in
            </button>
            <button
              type="button"
              className="border border-app-gray-1 text-pri-clr-1"
            >
              Sign up
            </button>
          </div>
        </div>
        <BackDrop handleClose={closeHandler} color="white" />
      </div>,
      portal
    );
  }

  return LogSignPortal;
}

export default LogInModal;
