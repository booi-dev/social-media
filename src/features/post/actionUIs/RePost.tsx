import { useState } from "react";

import { AiOutlineRetweet } from "react-icons/ai";

import useUserControls from "../../../redux/control/userControls";
import useGetProperties from "../../../hooks/useGetProperties";

import AppIcon from "../../../components/ui/AppIcon";
import RePostPanel from "../actions/RePostPanel";

import LogInModal from "../../login-signup/LogInModal";

import { TweetType, TypeStateType } from "../../../types";

type ReTweetType = {
  post: TweetType;
  typeState: TypeStateType;
};

function RePost(props: ReTweetType) {
  const { post, typeState } = props;

  const { isAuthenticate, user } = useUserControls();
  const { getTweetCreator } = useGetProperties();

  const [IsModalShow, setIsModalShow] = useState(false);
  const [isReTweetBtnClick, setIsReTweetBtnClick] = useState(false);

  const hasReTweeted = !!post.reTweets.find(
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
        className="group flex items-center"
      >
        {hasReTweeted ? (
          <AppIcon icon={AiOutlineRetweet} color="green" />
        ) : (
          <AppIcon icon={AiOutlineRetweet} hoverColor="green" />
        )}
        <div
          className={`pl-[1px] group-hover:text-green-400 ${
            hasReTweeted && "text-green-400"
          }`}
        >
          {post.reTweets.length > 0 ? (
            post.reTweets.length
          ) : (
            <span className="opacity-0"> 0</span>
          )}
        </div>
      </button>
      {isReTweetBtnClick && (
        <RePostPanel
          tweet={post}
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
            post.createBy
          )?.displayName.toUpperCase()}'s Tweet.`}
          closeHandler={() => setIsModalShow(false)}
        />
      )}
    </div>
  );
}

export default RePost;
