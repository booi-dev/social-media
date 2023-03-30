import { useState } from "react";

import useUserControls from "../../../redux/control/userControls";
import useGetProperties from "../../../hooks/useGetProperties";

import { RepostIcon } from "../../../components/icons";
import { AppIcon } from "../../../components/UI";

import RePostPanel from "../actions/RePostPanel";
import LogInModal from "../../../components/login-signup/LogInModal";

import { PostType, TypeStateType } from "../../../types";

type RePostUIType = {
  post: PostType;
  typeState: TypeStateType;
};

function RePostUI(props: RePostUIType) {
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
          <AppIcon icon={RepostIcon} color="green" />
        ) : (
          <AppIcon icon={RepostIcon} hoverColor="green" />
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
          iconDetail={{ icon: RepostIcon, color: "green" }}
          title="Repost to spread the word."
          text={`When you join Socia, you can share ${getPostCreator(
            post.createBy
          )?.displayName.toUpperCase()}'s Post.`}
          closeHandler={() => setIsModalShow(false)}
        />
      )}
    </div>
  );
}

export default RePostUI;
