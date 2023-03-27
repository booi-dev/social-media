import { useState } from "react";

import { AiOutlineRetweet } from "react-icons/ai";

import useUserControls from "../../../redux/control/userControls";
import useGetProperties from "../../../hooks/useGetProperties";

import AppIcon from "../../../components/ui/AppIcon";
import ReTweetPanel from "../actions/ReTweetPanel";

import LogInModal from "../../login-signup/LogInModal";

import { TweetType, TypeStateType } from "../../../types";

type ReTweetType = {
  tweet: TweetType;
  typeState: TypeStateType;
};

function ReTweet(props: ReTweetType) {
  const { tweet, typeState } = props;

  const { isAuthenticate, user } = useUserControls();
  const { getTweetCreator } = useGetProperties();

  const [IsModalShow, setIsModalShow] = useState(false);
  const [isReTweetBtnClick, setIsReTweetBtnClick] = useState(false);

  const hasReTweeted = !!tweet.reTweets.find(
    (retweet) => retweet.byUid === user.uid
  );

  const handleBtnClick = () => {
    if (isAuthenticate) setIsReTweetBtnClick(true);
    else {
      setIsModalShow(true);
    }
  };

  return (
    <div className="relative bg-inherit">
      <button
        type="button"
        onClick={handleBtnClick}
        className="flex items-center"
      >
        {hasReTweeted ? (
          <AppIcon
            icon={AiOutlineRetweet}
            color="green"
            text={tweet.reTweets.length > 0 ? tweet.reTweets.length : "0"}
          />
        ) : (
          <AppIcon
            icon={AiOutlineRetweet}
            hoverColor="green"
            text={tweet.reTweets.length > 0 ? tweet.reTweets.length : "0"}
          />
        )}
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
      {IsModalShow && (
        <LogInModal
          iconDetail={{ icon: AiOutlineRetweet, color: "green" }}
          title="Retweet to spread the word."
          text={`When you join Twitter, you can share ${getTweetCreator(
            tweet.createBy
          )?.displayName.toUpperCase()}'s Tweet.`}
          closeHandler={() => setIsModalShow(false)}
        />
      )}
    </div>
  );
}

export default ReTweet;
