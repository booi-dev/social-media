import { useState } from "react";

import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import AppIcon from "../../../components/ui/AppIcon";

import useTweetActions from "../hooks/usePostActions";
import useUserControls from "../../../redux/control/userControls";
import useGetProperties from "../../../hooks/useGetProperties";

import LogInModal from "../../login-signup/LogInModal";
import { TweetType, UserType } from "../../../types";

type LikeUIType = {
  user: UserType;
  post: TweetType;
};

function LikeUI(props: LikeUIType) {
  const { user, post } = props;
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
      likeTweet(post);
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
        className="group flex items-center"
      >
        {post.likes.includes(user.uid) ? (
          <AppIcon icon={BsFillHeartFill} color="pink" animation={anim} />
        ) : (
          <AppIcon icon={BsHeart} hoverColor="pink" />
        )}
        <div
          className={`pl-[1px] group-hover:text-pink-600
           ${post.likes.includes(user.uid) && "text-pink-600"}`}
        >
          {post.likes.length > 0 ? (
            post.likes.length
          ) : (
            <span className="opacity-0"> 0</span>
          )}
        </div>
      </button>
      {IsModalShow && (
        <LogInModal
          iconDetail={{ icon: BsFillHeartFill, color: "pink" }}
          title="Like a Tweet to share the love."
          text={`Join Twitter now to let ${getTweetCreator(
            post.createBy
          )?.displayName.toUpperCase()}'s Tweet with your followers.`}
          closeHandler={() => setIsModalShow(false)}
        />
      )}
    </>
  );
}

export default LikeUI;
