import React from "react";
import { BsChat, BsSuitHeart, BsTextRight } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { RxShare2 } from "react-icons/rx";
import useTweetControls from "../../redux/control/tweetControls";
import { TweetType } from "../../redux/slice/tweet";

import AppIcon from "../../components/AppIcon";

function Feed() {
  const { tweetData } = useTweetControls();

  //   console.log(tweetData);

  console.log(tweetData);

  return (
    <div>
      {tweetData.map((tweet: TweetType) => (
        <div
          key={tweet.id}
          className="border-x-[1px] border-b-[1px] hover:bg-app-white-2"
        >
          <h1 className="p-2">{tweet.tweet}</h1>
          <div className="flex w-full justify-around py-2">
            {/* reple */}
            <AppIcon icon={BsChat} color="blue" />
            {/* retweet */}
            <AppIcon icon={AiOutlineRetweet} color="green" />
            {/* like */}
            <AppIcon icon={BsSuitHeart} color="pink" />
            {/* view */}
            <AppIcon icon={BsTextRight} rotateDeg={90} color="blue" />
            {/* share */}
            <AppIcon icon={RxShare2} color="blue" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
