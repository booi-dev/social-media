import React from "react";
import { BsChat, BsSuitHeart, BsTextRight } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { RxShare2 } from "react-icons/rx";
import useTweetControls from "../../redux/control/tweetControls";
import { TweetType } from "../../redux/slice/tweet";

function Feed() {
  const { tweetData } = useTweetControls();

  //   console.log(tweetData);

  return (
    <div>
      {tweetData.map((tweet: TweetType) => (
        <div key={tweet.id}>
          <h1 className="py-2">{tweet.tweet}</h1>
          <div className="flex w-full justify-between py-2">
            <BsChat />
            <FaRetweet />
            <BsSuitHeart />
            <BsTextRight className="rotate-90" />
            <RxShare2 />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
