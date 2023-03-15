import React from "react";

import { BsGlobeAmericas, BsPersonHeart, BsCheck2 } from "react-icons/bs";

import BackDrop from "../ui/BackDrop";

type TweetAudienceFilterType = {
  handleClose: () => void;
};

function TweetAudienceFilter(props: TweetAudienceFilterType) {
  const { handleClose } = props;

  return (
    <>
      <div className="absolute top-8 w-[250px] p-4 text-app-font-17 font-medium  bg-app-white-1  dark:bg-app-black-1  rounded-xl shadow shadow-app-gray-3 z-20">
        <h1 className="py-2 text-app-font-20 font-bold">Choose audience</h1>
        <div className="flex items-center gap-1 py-2 px-1">
          <div className="p-2 rounded-full bg-pri-blue-1">
            <BsGlobeAmericas className=" text-app-white-1" />
          </div>
          <div className="flex items-center justify-between w-full">
            <h1> Everyone</h1>
            <BsCheck2 size={21} className="text-pri-blue-1" />
          </div>
        </div>
        <div className="flex items-center gap-1 py-2 px-1">
          <div className="p-2 rounded-full bg-green-500">
            <BsPersonHeart className=" text-app-white-1" />
          </div>
          <h1>Twitter Circle</h1>
        </div>
      </div>
      <BackDrop handleClose={handleClose} />
    </>
  );
}

export default TweetAudienceFilter;
