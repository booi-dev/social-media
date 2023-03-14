import { useState } from "react";

import { GoKebabVertical } from "react-icons/go";

import useGetProperties from "../../hooks/useGetProperties";

import TweetActions from "./TweetActions";
import BackDrop from "../../components/ui/BackDrop";
import VerificationBadge from "../../components/ui/VerificationBadge";
import FeedOptions from "./FeedOptions";
import TweetWithHighlightedHashTags from "./TweetWithHighlightedHashTags";

import { TweetType } from "../../types";

type TweetPropType = {
  tweet: TweetType;
  tweetState: {
    state: "normal" | "retweet";
    actionedTweetTid?: string;
  };
};

function Feed(props: TweetPropType) {
  const { tweet, tweetState } = props;

  const { getTweetCreator, getTimeElapse } = useGetProperties();

  const [isOption, setIsOption] = useState(false);

  const tweetCreator = getTweetCreator(tweet.createBy);

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

        <TweetActions tweet={tweet} tweetState={tweetState} />

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
