import React from "react";
import { createPortal } from "react-dom";

import BackDrop from "./BackDrop";

type LogInModalType = {
  closeHandler: () => void;
};

function LogInModal(props: LogInModalType) {
  const { closeHandler } = props;

  const portal = document.getElementById("portal");

  let LogSignPortal: React.ReactPortal | React.ReactElement = <div />;
  if (portal) {
    LogSignPortal = createPortal(
      <>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[200px] bg-red-300 z-20">
          LogSignModal
        </div>
        <BackDrop handleClose={closeHandler} color="blue" />
      </>,
      portal
    );
  }

  console.log("kdjhf");

  return LogSignPortal;
}

export default LogInModal;
