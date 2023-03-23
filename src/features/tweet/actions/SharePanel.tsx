import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { MdOutlineBookmarkAdd } from "react-icons/md";

import BackDrop from "../../../components/ui/BackDrop";

type SharePanelType = {
  closeHandler: () => void;
};

function SharePanel(props: SharePanelType) {
  const { closeHandler } = props;
  return (
    <>
      <div className="absolute right-[100px] -top-[20px] w-[200px] rounded-lg bg-app-white-1 dark:bg-app-black-1 shadow shadow-app-gray-3 p-3 space-y-3 z-20">
        <button type="button" className="flex items-center gap-2">
          <AiOutlineLink />
          Copy link to Tweet
        </button>
        <button type="button" className="flex items-center gap-2">
          <MdOutlineBookmarkAdd />
          Bookmark
        </button>
      </div>
      <BackDrop handleClose={closeHandler} />
    </>
  );
}

export default SharePanel;
