import { AiOutlineRetweet } from "react-icons/ai";

import useUserControls from "../../redux/control/userControls";
import useTweetControls from "../../redux/control/tweetControls";
import useGetProperties from "../../hooks/useGetProperties";

import Feed from "./Feed";
import TweetActions from "../tweetActions/TweetActionsUI";

import { TweetType } from "../../types";

type TypeStateType = {
  type: "normal" | "retweet" | "reply" | "mention";
  originalTweetId: string;
};

type ReTweetFeedType = {
  tweet: TweetType;
  typeState: TypeStateType;
};

function ReTweetFeed(props: ReTweetFeedType) {
  const { tweet, typeState } = props;

  const { user } = useUserControls();
  const { findTweet } = useTweetControls();
  const { getTweetCreator } = useGetProperties();

  const tweetCreator = getTweetCreator(tweet.createBy);

  const originalTweet: TweetType | undefined = findTweet(
    typeState.originalTweetId
  );

  return (
    <div className="border-inherit">
      <h1 className="flex items-center gap-2 px-2 pt-2 text-app-font-14 font-bold text-app-gray-3 ">
        <AiOutlineRetweet className="stroke-2" />
        {`${
          user.uid === tweetCreator?.uid ? "You" : tweetCreator?.displayName
        } Retweeted`}
      </h1>
      {originalTweet ? (
        <div>
          <Feed
            tweet={originalTweet}
            typeState={typeState}
            tweetActions={TweetActions}
          />
        </div>
      ) : (
        <div className="px-2 border-b-[1px] border-inherit text-app-gray-3">
          --Tweet not found
        </div>
      )}
    </div>
  );
}

export default ReTweetFeed;
