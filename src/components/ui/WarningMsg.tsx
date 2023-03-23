import React from "react";
import BackDrop from "./BackDrop";

type WarningMsgType = {
  warningText: string;
  warningDesc: string;
  warningBtn: string;
  handleConfirm: () => void;
  handleWarningClose: () => void;
};

function WarningMsg(props: WarningMsgType) {
  //   const handleCance = () => {};
  const {
    warningText,
    warningDesc,
    warningBtn,
    handleConfirm,
    handleWarningClose,
  } = props;

  const handleConfirmBtn = () => {
    handleConfirm();
  };

  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 w-[300px] h-auto p-8 rounded-lg text-inherit bg-inherit shadow-lg z-20">
        <h1 className="text-app-font-20 font-bold"> {warningText}</h1>
        <p className="text-app-font-14 text-inherit leading-4">{warningDesc}</p>
        <div className="mt-4 [&>button]:block [&>button]:w-full [&>button]:font-bold [&>button]:p-2  [&>button]:rounded-3xl [&>button]:transition-all [&>button]:duration-500">
          <button
            type="button"
            className="text-app-white-1 bg-red-500 hover:bg-red-600 focus:bg-red-800 "
            onClick={handleConfirmBtn}
          >
            {warningBtn}
          </button>
          <button
            type="button"
            className="mt-2 border-app-gray-3 border-[1px] border-opacity-40 hover:bg-app-white-3 hover:text-app-black-1 focus:bg-app-white-4"
            onClick={handleWarningClose}
          >
            Cancel
          </button>
        </div>
      </div>
      <BackDrop handleClose={handleWarningClose} color="black" />
    </>
  );
}

export default WarningMsg;
