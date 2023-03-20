import React from "react";
import { BsSuitHeart } from "react-icons/bs";
import AppIcon from "../../../components/ui/AppIcon";
import useTweetActions from "../actions/useTweetActions";
import { TweetType, UserType } from "../../../types";

type LikeUIType = {
  user: UserType;
  tweet: TweetType;
};

function LikeUI(props: LikeUIType) {
  const { user, tweet } = props;

  const { likeTweet } = useTweetActions();

  return (
    <button
      type="button"
      onClick={() => likeTweet(tweet)}
      className="flex items-center"
    >
      {tweet.likes.includes(user.uid) ? (
        <>
          <AppIcon
            icon={BsSuitHeart}
            color="pink"
            text={tweet.likes.length > 0 ? tweet.likes.length : ""}
          />
          {/* <span>{tweet.likes.length > 0 && tweet.likes.length}</span> */}
        </>
      ) : (
        <>
          <AppIcon icon={BsSuitHeart} hoverColor="pink" />
          {tweet.likes.length > 0 && tweet.likes.length}
        </>
      )}
    </button>
  );
}

export default LikeUI;
