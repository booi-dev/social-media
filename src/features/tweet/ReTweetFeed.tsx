import { AiOutlineRetweet } from "react-icons/ai";

import useUserControls from "../../redux/control/userControls";
import useTweetControls from "../../redux/control/tweetControls";
import useGetProperties from "../../hooks/useGetProperties";

import Feed from "./Feed";

import { TweetType, ActionStateType } from "../../types";

type ReTweetFeedType = {
  tweet: TweetType;
  actionState: ActionStateType;
};

function ReTweetFeed(props: ReTweetFeedType) {
  const { tweet, actionState } = props;

  const { user } = useUserControls();
  const { findTweet } = useTweetControls();
  const { getTweetCreator } = useGetProperties();

  const tweetCreator = getTweetCreator(tweet.createBy);

  let originalTweet: TweetType | undefined;

  if (tweet.tweetKind) {
    originalTweet = findTweet(tweet.tweetKind.referenceTid);
  }

  return (
    <div className="border-inherit">
      <h1 className="flex items-center gap-2 px-2 text-app-font-14 font-bold text-app-gray-3 ">
        <AiOutlineRetweet className="stroke-2" />
        {`${
          user.uid === tweetCreator?.uid ? "You" : tweetCreator?.displayName
        } Retweeted`}
      </h1>
      {originalTweet ? (
        <Feed tweet={originalTweet} actionState={actionState} />
      ) : (
        <div className="px-2 border-b-[1px] border-inherit text-app-gray-3">
          --Tweet not found
        </div>
      )}
    </div>
  );
}

export default ReTweetFeed;
