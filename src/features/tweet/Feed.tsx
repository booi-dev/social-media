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

  return (
    <div>
      {tweetData.map((tweet: TweetType) => (
        <div key={tweet.id} className="hover:bg-app-white-3">
          <h1 className="py-2">{tweet.tweet}</h1>
          <div className="flex w-full justify-around py-2">
            {/* reple */}
            <AppIcon icon={BsChat} size={20} color="blue" />
            {/* retweet */}
            <AppIcon icon={AiOutlineRetweet} size={20} color="green" />
            {/* like */}
            <AppIcon icon={BsSuitHeart} size={20} color="pink" />
            {/* view */}
            <AppIcon icon={BsTextRight} size={20} rotateDeg={90} color="blue" />
            {/* share */}
            <AppIcon icon={RxShare2} size={20} color="blue" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
