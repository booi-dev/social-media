import { useState } from "react";

import { BsChat, BsTextRight } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { RxShare2 } from "react-icons/rx";

import useUserControls from "../../redux/control/userControls";

import LikeUI from "../TweetUI/LikeUI";
import AppIcon from "../../components/ui/AppIcon";
import BackDrop from "../../components/ui/BackDrop";
import ReTweetPanel from "./ReTweetPanel";
import TweetReplyForm from "./TweetReplyForm";

import { TweetType, TypeStateType } from "../../types";

type TweetActionsType = {
  tweet: TweetType;
  typeState: TypeStateType;
};

function TweetActionsUI(props: TweetActionsType) {
  const { tweet, typeState } = props;

  const { user } = useUserControls();

  const [isReTweetBtnClick, setIsReTweetBtnClick] = useState(false);
  const [isReplyBtnClick, setIsReplyBtnClick] = useState(false);

  const hasReTweeted = !!tweet.reTweets.find(
    (retweet) => retweet.byUid === user.uid
  );

  return (
    <>
      <div className="flex justify-between w-full bg-inherit text-inherit border-b-[0px] border-app-white-1 dark:border-app-gray-1 ">
        {/* ............reply............ */}
        <button
          type="button"
          onClick={() => setIsReplyBtnClick(true)}
          className="flex items-center"
        >
          <AppIcon icon={BsChat} hoverColor="blue" />
          {tweet.replies.length > 0 && tweet.replies.length}
        </button>
        {/* ............retweet ............ */}
        <div className="relative bg-inherit">
          <button
            type="button"
            onClick={() => setIsReTweetBtnClick(true)}
            className="flex items-center"
          >
            {hasReTweeted ? (
              <AppIcon icon={AiOutlineRetweet} color="green" />
            ) : (
              <AppIcon icon={AiOutlineRetweet} hoverColor="green" />
            )}
            <span className={`${hasReTweeted && "text-green-400"}`}>
              {tweet.reTweets.length > 0 && tweet.reTweets.length}
            </span>
          </button>
          {isReTweetBtnClick && (
            <ReTweetPanel
              tweet={tweet}
              closeHandler={() => setIsReTweetBtnClick(false)}
              reTweetState={{
                state: hasReTweeted,
                reTweetId: typeState.originalTweetId,
              }}
            />
          )}
        </div>
        {/* ............like............ */}
        <LikeUI user={user} tweet={tweet} />
        {/* ............view............ */}
        <div className="hidden sm:block">
          <AppIcon icon={BsTextRight} rotateDeg={90} hoverColor="blue" />
        </div>
        {/* ............share............ */}
        <AppIcon icon={RxShare2} hoverColor="blue" />
      </div>
      {isReplyBtnClick && (
        <>
          <div className="fixed inset-0 h-screen min-w-[480px] sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[500px]  sm:h-min z-20">
            <TweetReplyForm
              originalTweet={tweet}
              closeHandler={() => setIsReplyBtnClick(false)}
            />
          </div>
          <BackDrop
            handleClose={() => setIsReplyBtnClick(false)}
            color="white"
          />
        </>
      )}
    </>
  );
}

export default TweetActionsUI;
