import React from "react";
import { IoMdClose } from "react-icons/io";

import AppIcon from "../../components/ui/AppIcon";
import TweetBox from "../../components/tweetbox/TweetBox";

import useGetProperties from "../../hooks/useGetProperties";

import TweetSignature from "./TweetSignature";

import { TweetType } from "../../types";

type OriginalTweetType = {
  tweet: TweetType;
};

function OriginalTweet({ tweet }: OriginalTweetType) {
  return (
    <div className="flex items-center gap-1.5 px-4 text-inherit">
      <TweetSignature
        tweetCreatorUid={tweet.createBy}
        tweetTimespan={tweet.timespan}
      />
    </div>
  );
}

type ReplyTweetBoxType = {
  tweet: TweetType;
  closeHandler: () => void;
};

function TweetReplyBox(props: ReplyTweetBoxType) {
  const { closeHandler, tweet } = props;

  const { getTweetCreator } = useGetProperties();
  const tweetCreator = getTweetCreator(tweet.createBy);

  return (
    <div className="relative bg-app-black-3 w-full h-full rounded-xl z-20">
      <button type="button" onClick={closeHandler}>
        <AppIcon icon={IoMdClose} size={26} hoverColor="blue" />
      </button>
      <OriginalTweet tweet={tweet} />
      <h1 className="px-4 text-app-gray-3">
        {`Replying to @${tweetCreator?.userName}`}
      </h1>
      <div className=" p-4 ">
        {" "}
        <TweetBox isLargeTextArea />
      </div>
    </div>
  );
}

export default TweetReplyBox;
