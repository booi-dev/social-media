import { useState } from "react";

import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import AppIcon from "../../../components/ui/AppIcon";

import useTweetActions from "../hooks/useTweetActions";
import useUserControls from "../../../redux/control/userControls";
import useGetProperties from "../../../hooks/useGetProperties";

import LogInModal from "../../login-signup/LogInModal";
import { TweetType, UserType } from "../../../types";

type LikeUIType = {
  user: UserType;
  tweet: TweetType;
};

function LikeUI(props: LikeUIType) {
  const { user, tweet } = props;
  const { likeTweet } = useTweetActions();

  const { isAuthenticate } = useUserControls();
  const { getTweetCreator } = useGetProperties();
  const [IsModalShow, setIsModalShow] = useState(false);

  const [anim, setAnim] = useState("");

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
      {IsModalShow && (
        <LogInModal
          iconDetail={{ icon: BsFillHeartFill, color: "pink" }}
          title="Like a Tweet to share the love."
          text={`Join Twitter now to let ${getTweetCreator(
            tweet.createBy
          )?.displayName.toUpperCase()}'s Tweet with your followers.`}
          closeHandler={() => setIsModalShow(false)}
        />
      )}
    </>
  );
}

export default LikeUI;
