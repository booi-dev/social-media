import React from "react";

import { VscSmiley } from "react-icons/vsc";
import { MdOutlineBallot } from "react-icons/md";
import { ImImage } from "react-icons/im";

import AppIcon from "../ui/AppIcon";

import { TweetType } from "../../redux/slice/tweet";

type TweetBtnPanelType = {
  tweet: TweetType;
  characterCount: number;
};

function TweetBtnPanel(props: TweetBtnPanelType) {
  const { tweet, characterCount } = props;

  return (
    <div className="flex justify-between items-center w-full py-1">
      <div className="flex items-center gap-1">
        <AppIcon icon={ImImage} size={18} color="blue" hoverColor="blue" />
        <AppIcon
          icon={MdOutlineBallot}
          size={22}
          color="blue"
          hoverColor="blue"
        />
        <AppIcon icon={VscSmiley} size={20} color="blue" hoverColor="blue" />
      </div>
      <div className="flex gap-2 text-app-gray-3 items-center">
        <div>{characterCount}</div>

        <div className="  [&>button]:rounded-3xl [&>button]:text-app-white-1   [&>button]:w-full  [&>button]:px-4 [&>button]:py-1 [&>button]:font-bold">
          {tweet.tweet ? (
            <button type="submit" className="bg-pri-blue-1">
              Tweet
            </button>
          ) : (
            <button type="button" className="bg-pri-blue-1 bg-opacity-60 ">
              Tweet
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TweetBtnPanel;
