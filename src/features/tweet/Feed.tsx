import React from "react";
import {
  differenceInMinutes,
  differenceInHours,
  differenceInSeconds,
} from "date-fns";
import { BsChat, BsSuitHeart, BsTextRight } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { RxShare2 } from "react-icons/rx";
import { TweetType } from "../../redux/slice/tweet";
import AppIcon from "../../components/AppIcon";

type TweetPropType = {
  tweet: TweetType;
};

function Feed(props: TweetPropType) {
  const { tweet } = props;

  const startDate = new Date(tweet?.createOn);
  const currentDate = new Date();

  console.log(differenceInSeconds(currentDate, startDate));

  return (
    <div>
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
    </div>
  );
}

export default Feed;
