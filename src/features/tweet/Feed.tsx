import React from "react";
import useTweetControls from "../../redux/control/tweetControls";
import { TweetType } from "../../redux/slice/tweet";

function Feed() {
  const { tweetData } = useTweetControls();

  console.log(tweetData);

  return (
    <div>
      {tweetData.map((tweet: TweetType) => (
        <div key={tweet.id}> {tweet.tweet}</div>
      ))}
    </div>
  );
}

export default Feed;
