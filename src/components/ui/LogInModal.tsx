import React from "react";
import { createPortal } from "react-dom";
import { IconType } from "react-icons";
import { RxCross2 } from "react-icons/rx";

import useThemeControls from "../../redux/control/themeControl";

import AppIcon from "./AppIcon";

import BackDrop from "./BackDrop";

type LogInModalType = {
  iconDetail: { icon: IconType; color: "blue" | "pink" | "green" };
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
        <div
          className="absolute top-0 bottom-0 w-full flex flex-col justify-center

        sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[550px] p-12 bg-app-white-1 dark:bg-app-black-1 text-app-gray-1 dark:text-app-white-1 shadow shadow-app-gray-1 rounded-xl z-20"
        >
          <button
            type="button"
            className="absolute top-2 left-2"
            onClick={closeHandler}
          >
            <AppIcon icon={RxCross2} size={25} hoverColor="gray" />
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
          <div className="flex flex-col gap-2 mt-6 [&>button]:py-2 [&>button]:font-bold [&>button]:rounded-2xl">
            <button type="button" className="bg-pri-blue-1">
              Log in{" "}
            </button>
            <button
              type="button"
              className="border border-app-gray-1 text-pri-blue-1"
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
