import { useState } from "react";

import { BsChat, BsSuitHeart, BsTextRight } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { RxShare2 } from "react-icons/rx";
import { GoKebabVertical } from "react-icons/go";

import useGetProperties from "../../hooks/useGetProperties";

import AppIcon from "../../components/ui/AppIcon";
import BackDrop from "../../components/ui/BackDrop";
import VerificationBadge from "../../components/ui/VerificationBadge";
import FeedOptions from "./FeedOptions";
import TweetWithHighlightedHashTags from "./TweetWithHighlightedHashTags";

import addExtraProperties, {
  EnhancedTweetType,
} from "../../utils/addExtraProperties";
import { TweetType } from "../../types";

type TweetPropType = {
  tweet: TweetType;
};

function Feed(props: TweetPropType) {
  const { tweet } = props;

  const { getTweetCreator } = useGetProperties();

  const [enhancedTweet] = useState<EnhancedTweetType>(
    addExtraProperties(tweet)
  );

  const [isOption, setIsOption] = useState(false);

  const tweetCreator = getTweetCreator(tweet.createBy);

  return (
    <>
      <div
        key={enhancedTweet?.tid}
        className="relative px-1 pt-2.5 text-inherit border-x-[1px] border-b-[1px] dark:border-app-gray-1 hover:bg-app-white-2  dark:hover:bg-transparent md:px-4 bg-inherited "
      >
        <div className="flex justify-between px-2 text-inherit">
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
            <h2 className="text-inherited">{enhancedTweet?.timeElapse}</h2>
          </div>

          <button type="button" className="" onClick={() => setIsOption(true)}>
            <GoKebabVertical />
          </button>
        </div>

        <div className="p-2">
          <TweetWithHighlightedHashTags tweet={enhancedTweet?.tweet} />
        </div>

        <div className="flex w-full justify-around ">
          {/* reply */}
          <div className="flex items-center">
            <AppIcon icon={BsChat} hoverColor="blue" />
            {enhancedTweet?.replyBy.length > 0 && enhancedTweet?.replyBy.length}
          </div>
          {/* retweet */}
          <div className="flex items-center">
            <AppIcon icon={AiOutlineRetweet} hoverColor="green" />
            {enhancedTweet?.retweeetBy.length > 0 &&
              enhancedTweet?.retweeetBy.length}
          </div>
          {/* like */}
          <div className="flex items-center">
            <AppIcon icon={BsSuitHeart} hoverColor="pink" />
            {enhancedTweet?.likeBy.length > 0 && enhancedTweet?.likeBy.length}
          </div>
          {/* view */}
          <div className="hidden sm:block">
            <AppIcon icon={BsTextRight} rotateDeg={90} hoverColor="blue" />
          </div>
          {/* share */}
          <AppIcon icon={RxShare2} hoverColor="blue" />
        </div>
        {isOption && (
          <div className="absolute top-2 right-2 min-w-[250px] py-4 rounded-lg text-inherit bg-inherit dark:bg-app-black-3 shadow-lg z-20">
            <FeedOptions tweet={enhancedTweet} />
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
