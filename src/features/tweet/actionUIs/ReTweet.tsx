import { useState } from "react";

import { AiOutlineRetweet } from "react-icons/ai";

import useUserControls from "../../../redux/control/userControls";

import AppIcon from "../../../components/ui/AppIcon";
import ReTweetPanel from "../actions/ReTweetPanel";

import { TweetType, TypeStateType } from "../../../types";

type ReTweetType = {
  tweet: TweetType;
  typeState: TypeStateType;
};

function ReTweet(props: ReTweetType) {
  const { tweet, typeState } = props;

  const { user } = useUserControls();
  const [isReTweetBtnClick, setIsReTweetBtnClick] = useState(false);

  const hasReTweeted = !!tweet.reTweets.find(
    (retweet) => retweet.byUid === user.uid
  );

  return (
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
  );
}

export default ReTweet;
