import React from "react";
import useTweetControls from "../../redux/control/tweetControls";
import { TweetType } from "../../redux/slice/tweet";

import Feed from "./Feed";

function FeedList() {
  const { tweetData } = useTweetControls();

  return (
    <>
      {tweetData.map((tweet: TweetType) => (
        <Feed key={tweet.id} tweet={tweet} />
      ))}
    </>
  );
}

export default FeedList;
