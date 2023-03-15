import React from "react";
import { IoMdClose } from "react-icons/io";

import AppIcon from "../../components/ui/AppIcon";
import TweetBox from "../../components/tweetbox/TweetBox";

import useGetProperties from "../../hooks/useGetProperties";

import TweetSignature, { TweetCreatorPic } from "./TweetSignature";

import { TweetType } from "../../types";

type OriginalTweetType = {
  tweet: TweetType;
};

function OriginalTweet({ tweet }: OriginalTweetType) {
  const { getTweetCreator } = useGetProperties();
  const tweetCreator = getTweetCreator(tweet.createBy);
  return (
    <div className="flex flex-col px-4 ">
      <div className="flex gap-4 ">
        <div className="w-12 h-12 shrink-0">
          <TweetCreatorPic tweetCreatorUid={tweet.createBy} />
        </div>
        <div className="flex items-center gap-1.5 text-inherit">
          <TweetSignature
            tweetCreatorUid={tweet.createBy}
            tweetTimespan={tweet.timespan}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex justify-center w-12">
          <div className="w-[1px] h-full bg-app-gray-3" />
        </div>
        <div>{tweet.tweet}</div>
      </div>
      <div className="flex gap-4">
        <div className="flex justify-center w-12">
          <div className="w-[1px] h-full bg-app-gray-3" />
        </div>
        <h1 className=" py-2 text-app-gray-3">
          {`Replying to @${tweetCreator?.userName}`}
        </h1>
      </div>
    </div>
  );
}

type ReplyTweetBoxType = {
  tweet: TweetType;
  closeHandler: () => void;
};

function TweetReplyBox(props: ReplyTweetBoxType) {
  const { closeHandler, tweet } = props;

  return (
    <div className="relative bg-app-black-3 w-full h-full rounded-xl z-20">
      <button type="button" onClick={closeHandler}>
        <AppIcon icon={IoMdClose} size={26} hoverColor="blue" />
      </button>
      <OriginalTweet tweet={tweet} />
      <div className="py-2 px-4 ">
        <TweetBox isLargeTextArea isFilterBtnHidden />
      </div>
    </div>
  );
}

export default TweetReplyBox;
