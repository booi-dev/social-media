import { useState } from "react";

import { BsChat, BsSuitHeart, BsTextRight } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { RxShare2 } from "react-icons/rx";
import { GoKebabVertical } from "react-icons/go";

import useUserControls from "../../redux/control/userControls";
import useGetProperties from "../../hooks/useGetProperties";

import AppIcon from "../../components/ui/AppIcon";
import BackDrop from "../../components/ui/BackDrop";
import VerificationBadge from "../../components/ui/VerificationBadge";
import FeedOptions from "./FeedOptions";
import TweetWithHighlightedHashTags from "./TweetWithHighlightedHashTags";
import ReTweetPanel from "../../components/tweetbox/ReTweetPanel";

import { TweetType } from "../../types";

type TweetPropType = {
  tweet: TweetType;
};

function Feed(props: TweetPropType) {
  const { tweet } = props;

  const { getTweetCreator, getTimeElapse } = useGetProperties();
  const { user } = useUserControls();

  const [isOption, setIsOption] = useState(false);
  const [isReTweet, setIsReTweet] = useState(false);

  const tweetCreator = getTweetCreator(tweet.createBy);

  const hasReTweeted = !!tweet.retweeetBy.find((uid) => user.uid);

  return (
    <>
      <div
        key={tweet.tid}
        className="relative px-1 pt-2.5 bg-inherit text-inherit border-x-[1px] border-b-[1px] dark:border-app-gray-1 hover:bg-app-white-2  dark:hover:bg-transparent md:px-4 bg-inherited "
      >
        <div className="flex justify-between px-2 bg-inherit text-inherit">
          <div className="flex items-center gap-1.5 text-inherit">
            <img
              src={tweetCreator?.displayPicURL}
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />
            <h2 className="text-inherit font-bold">
              {tweetCreator?.displayName}
            </h2>

            {tweetCreator?.verification.state && (
              <VerificationBadge type={tweetCreator?.verification.type} />
            )}

            <h2 className="text-inherited">{`@${tweetCreator?.userName}`}</h2>
            <div className="mx-.5 text-inherited">·</div>
            <h2 className="text-inherited">{getTimeElapse(tweet.timespan)}</h2>
          </div>

          <button type="button" className="" onClick={() => setIsOption(true)}>
            <GoKebabVertical />
          </button>
        </div>

        <div className="p-2">
          <TweetWithHighlightedHashTags tweet={tweet.tweet} />
        </div>

        <div className="flex justify-around w-full bg-inherit ">
          {/* ............reply............ */}
          <div className="flex items-center">
            <AppIcon icon={BsChat} hoverColor="blue" />
            {tweet.replyBy.length > 0 && tweet.replyBy.length}
          </div>
          {/* ............retweet ............ */}
          <div className="relative bg-inherit">
            <button
              type="button"
              onClick={() => setIsReTweet(true)}
              className="flex items-center"
            >
              {hasReTweeted ? (
                <AppIcon icon={AiOutlineRetweet} color="green" />
              ) : (
                <AppIcon icon={AiOutlineRetweet} hoverColor="green" />
              )}

              <span className={`${hasReTweeted && "text-green-400"}`}>
                {tweet.retweeetBy.length > 0 && tweet.retweeetBy.length}
              </span>
            </button>
            {isReTweet && (
              <ReTweetPanel
                tweet={tweet}
                hasReTweeted={hasReTweeted}
                closeHandler={() => setIsReTweet(false)}
              />
            )}
          </div>
          {/* ............like............ */}
          <div className="flex items-center">
            <AppIcon icon={BsSuitHeart} hoverColor="pink" />
            {tweet.likeBy.length > 0 && tweet.likeBy.length}
          </div>
          {/* ............view............ */}
          <div className="hidden sm:block">
            <AppIcon icon={BsTextRight} rotateDeg={90} hoverColor="blue" />
          </div>
          {/* ............share............ */}
          <AppIcon icon={RxShare2} hoverColor="blue" />
        </div>
        {isOption && (
          <div className="absolute top-2 right-2 min-w-[250px] py-4 rounded-lg text-inherit bg-inherit dark:bg-app-black-3 shadow-lg z-20">
            <FeedOptions tweet={tweet} />
          </div>
        )}
      </div>
      {isOption && (
        <BackDrop handleClose={() => setIsOption(false)} color="black" />
      )}
    </>
  );
}

export default Feed;
