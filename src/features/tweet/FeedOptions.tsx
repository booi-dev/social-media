import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPin } from "react-icons/bs";

function FeedOptions() {
  return (
    <div className="text-app-font-17 font-bold ">
      <button
        type="button"
        className="flex items-center gap-2 w-full p-3 text-left text-red-500 hover:bg-app-white-2"
      >
        <RiDeleteBinLine />
        Delete
      </button>

      <button
        type="button"
        className="flex items-center gap-2 w-full p-3 text-left hover:bg-app-white-2"
      >
        <BsPin />
        Pin to your profile
      </button>
    </div>
  );
}

export default FeedOptions;
