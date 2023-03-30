import { useState } from "react";

import usePostActions from "../hooks/usePostActions";
import useUserControls from "../../../redux/control/userControls";
import useGetProperties from "../../../hooks/useGetProperties";

import { HeartIcon, HeartFillIcon } from "../../../components/icons";
import { AppIcon } from "../../../components/UI";

import LogInModal from "../../../components/login-signup/LogInModal";
import { PostType, UserType } from "../../../types";

type LikeUIType = {
  user: UserType;
  post: PostType;
};

function LikeUI(props: LikeUIType) {
  const { user, post } = props;
  const { likePost } = usePostActions();

  const { isAuthenticate } = useUserControls();
  const { getPostCreator } = useGetProperties();
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
      likePost(post);
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
          <AppIcon icon={HeartFillIcon} color="pink" animation={anim} />
        ) : (
          <AppIcon icon={HeartIcon} hoverColor="pink" />
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
          iconDetail={{ icon: HeartFillIcon, color: "pink" }}
          title="Like a Post to share the love."
          text={`Join Socia now to let ${getPostCreator(
            post.createBy
          )?.displayName.toUpperCase()}'s Post with your followers.`}
          closeHandler={() => setIsModalShow(false)}
        />
      )}
    </>
  );
}

export default LikeUI;
