import React from "react";
import { TweetType } from "../../types";

type TypeStateType = {
  type: "normal" | "retweet" | "reply" | "mention";
  originalTweetId: string;
};

type ReplyTweedFeedType = {
  tweet: TweetType;
  typeState: TypeStateType;
};

function ReplyTweedFeed(props: ReplyTweedFeedType) {
  const { tweet, typeState } = props;

  return <div>{tweet.tweet}</div>;
}

export default ReplyTweedFeed;
