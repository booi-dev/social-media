import Feed from "./Feed";

import useTweetControls from "../../../redux/control/tweetControls";

import TweetActionsUI from "../components/TweetActionsUI";

import { TweetType } from "../../../types";

type TypeStateType = {
  type: "normal" | "retweet" | "reply" | "mention";
  originalTweetId: string;
};

type ReplyTweetFeedType = {
  tweet: TweetType;
  typeState: TypeStateType;
};

function ReplyTweetFeed(props: ReplyTweetFeedType) {
  const { tweet, typeState } = props;

  const { findTweet } = useTweetControls();

  const originalTweet: TweetType | undefined = findTweet(
    typeState.originalTweetId
  );

  let wrappedTweet: React.ReactElement | null = null;

  if (originalTweet) {
    wrappedTweet = (
      <div className="border-[1px] border-app-white-5 dark:border-app-gray-1 rounded-lg">
        <Feed tweet={originalTweet} typeState={typeState} />
      </div>
    );
  }

  return (
    <div>
      <Feed
        tweet={tweet}
        typeState={typeState}
        tweetActionsUI={TweetActionsUI}
        wrappedTweet={wrappedTweet}
      />
    </div>
  );
}

export default ReplyTweetFeed;
