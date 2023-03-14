import React from "react";

import { AiOutlineRetweet } from "react-icons/ai";

import useUserControls from "../../redux/control/userControls";
import useTweetControls from "../../redux/control/tweetControls";
import useGetProperties from "../../hooks/useGetProperties";

import Feed from "./Feed";

import { TweetType } from "../../types";

type ReTweetFeedType = {
  tweet: TweetType;
};

function ReTweetFeed(props: ReTweetFeedType) {
  const { tweet } = props;

  const { user } = useUserControls();
  const { findTweet } = useTweetControls();
  const { getTweetCreator } = useGetProperties();

  let originalTweet: TweetType | undefined;

  if (tweet.tweetKind) {
    originalTweet = findTweet(tweet.tweetKind.referenceTid);
  }

  const tweetCreator = getTweetCreator(tweet.createBy);

  return (
    <div className="border-x-[1px] border-inherit">
      <h1 className="flex items-center gap-2 px-2 text-app-font-14 font-bold text-app-gray-3 ">
        <AiOutlineRetweet className="stroke-2" />
        {`${
          user.uid === tweetCreator?.uid ? "You" : tweetCreator?.displayName
        } Retweeted`}
      </h1>
      {originalTweet ? (
        <Feed tweet={originalTweet} />
      ) : (
        <div className="px-2 border-b-[1px] border-inherit text-app-gray-3">
          --Tweet not found
        </div>
      )}
    </div>
  );
}

export default ReTweetFeed;
