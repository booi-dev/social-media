import { useState } from "react";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import AppIcon from "../../../components/ui/AppIcon";
import useTweetActions from "../hooks/useTweetActions";
import { TweetType, UserType } from "../../../types";

type LikeUIType = {
  user: UserType;
  tweet: TweetType;
};

function LikeUI(props: LikeUIType) {
  const { user, tweet } = props;
  const { likeTweet } = useTweetActions();

  const [anim, setAnim] = useState("");

  const setAnimation = () => {
    setAnim("scale-125");
    setTimeout(() => {
      setAnim("");
    }, 200);
  };

  const handleBtnClick = () => {
    likeTweet(tweet);
    setAnimation();
  };

  return (
    <button
      type="button"
      onClick={handleBtnClick}
      className="flex items-center "
    >
      {tweet.likes.includes(user.uid) ? (
        <AppIcon
          icon={BsFillHeartFill}
          color="pink"
          text={tweet.likes.length > 0 ? tweet.likes.length : "0"}
          animation={anim}
        />
      ) : (
        <AppIcon
          icon={BsHeart}
          hoverColor="pink"
          text={tweet.likes.length > 0 ? tweet.likes.length : "0"}
        />
      )}
    </button>
  );
}

export default LikeUI;
