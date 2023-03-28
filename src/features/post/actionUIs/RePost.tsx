import { useState } from "react";

import { AiOutlineRetweet } from "react-icons/ai";

import useUserControls from "../../../redux/control/userControls";
import useGetProperties from "../../../hooks/useGetProperties";

import AppIcon from "../../../components/ui/AppIcon";
import RePostPanel from "../actions/RePostPanel";

import LogInModal from "../../login-signup/LogInModal";

import { PostType, TypeStateType } from "../../../types";

type RePostType = {
  post: PostType;
  typeState: TypeStateType;
};

function RePost(props: RePostType) {
  const { post, typeState } = props;

  const { isAuthenticate, user } = useUserControls();
  const { getPostCreator } = useGetProperties();

  const [IsModalShow, setIsModalShow] = useState(false);
  const [isRePostBtnClick, setIsRePostBtnClick] = useState(false);

  const hasReposted = !!post.reposts.find(
    (repost) => repost.byUid === user.uid
  );

  const handleBtnClick = () => {
    if (isAuthenticate) setIsRePostBtnClick(true);
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
        {hasReposted ? (
          <AppIcon icon={AiOutlineRetweet} color="green" />
        ) : (
          <AppIcon icon={AiOutlineRetweet} hoverColor="green" />
        )}
        <div
          className={`pl-[1px] group-hover:text-green-400 ${
            hasReposted && "text-green-400"
          }`}
        >
          {post.reposts.length > 0 ? (
            post.reposts.length
          ) : (
            <span className="opacity-0"> 0</span>
          )}
        </div>
      </button>
      {isRePostBtnClick && (
        <RePostPanel
          post={post}
          closeHandler={() => setIsRePostBtnClick(false)}
          repostState={{
            state: hasReposted,
            rePostId: typeState.originalPostId,
          }}
        />
      )}
      {IsModalShow && (
        <LogInModal
          iconDetail={{ icon: AiOutlineRetweet, color: "green" }}
          title="Repost to spread the word."
          text={`When you join Twitter, you can share ${getPostCreator(
            post.createBy
          )?.displayName.toUpperCase()}'s Post.`}
          closeHandler={() => setIsModalShow(false)}
        />
      )}
    </div>
  );
}

export default RePost;
