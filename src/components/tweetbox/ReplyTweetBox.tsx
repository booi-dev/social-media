import React from "react";
import { IoMdClose } from "react-icons/io";

import AppIcon from "../ui/AppIcon";
import Feed from "../../features/tweet/Feed";
import TweetBox from "./TweetBox";

import useGetProperties from "../../hooks/useGetProperties";

import { TweetType } from "../../types";

type ReplyTweetBoxType = {
  tweet: TweetType;
  closeHandler: () => void;
};

function ReplyTweetBox(props: ReplyTweetBoxType) {
  const { closeHandler, tweet } = props;

  const { getTweetCreator } = useGetProperties();

  const tweetCreator = getTweetCreator(tweet.createBy);

  return (
    <div className="relative bg-app-black-3 w-full h-full rounded-md z-20">
      <button
        type="button"
        onClick={closeHandler}
        className="hover:text-pri-blue-1 transition-all duration-500"
      >
        <AppIcon icon={IoMdClose} size={26} hoverColor="black" />
      </button>
      <div className="px-3 md:px-0">
        <Feed tweet={tweet} tweetState={{ state: "normal" }} />
      </div>
      <h1 className="px-4 text-app-gray-3">
        {`Replying to @${tweetCreator?.userName}`}
      </h1>
      <div className=" p-4 ">
        <TweetBox isLargeTextArea />
      </div>
    </div>
  );
}

export default ReplyTweetBox;
