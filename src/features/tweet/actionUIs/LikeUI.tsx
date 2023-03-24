import { useState } from "react";

import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import AppIcon from "../../../components/ui/AppIcon";

import useTweetActions from "../hooks/useTweetActions";
import useUserControls from "../../../redux/control/userControls";

import LogInModal from "../../../components/ui/LogInModal";
import { TweetType, UserType } from "../../../types";

type LikeUIType = {
  user: UserType;
  tweet: TweetType;
};

function LikeUI(props: LikeUIType) {
  const { user, tweet } = props;
  const { likeTweet } = useTweetActions();
  const { isAuthenticate } = useUserControls();

  const [anim, setAnim] = useState("");
  const [IsModalShow, setIsModalShow] = useState(false);

  const setAnimation = () => {
    setAnim("scale-125");
    setTimeout(() => {
      setAnim("");
    }, 200);
  };

  const handleBtnClick = () => {
    if (isAuthenticate) {
      likeTweet(tweet);
      setAnimation();
    } else {
      setIsModalShow(true);
    }
  };

  return (
    <>
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
      {IsModalShow && <LogInModal closeHandler={() => setIsModalShow(false)} />}
    </>
  );
}

export default LikeUI;
