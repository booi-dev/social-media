import { useState } from "react";

import useUserControls from "../../../redux/control/userControls";
import useGetProperties from "../../../hooks/useGetProperties";

import { ChatIcon, ChatFillIcon } from "../../../components/icons";
import { AppIcon, BackDrop } from "../../../components/UI";

import PostReplyForm from "../actions/PostReplyForm";
import LogInModal from "../../login-signup/LogInModal";

import { PostType } from "../../../types";

function ReplyUI(props: { post: PostType }) {
  const { post } = props;

  const { isAuthenticate } = useUserControls();
  const { getPostCreator } = useGetProperties();
  const [IsModalShow, setIsModalShow] = useState(false);

  const [isReplyBtnClick, setIsReplyBtnClick] = useState(false);

  const handleBtnClick = () => {
    if (isAuthenticate) setIsReplyBtnClick(true);
    else {
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
        <AppIcon icon={ChatIcon} hoverColor="pri" />
        <div className="pl-[1px] group-hover:text-pri-clr-1">
          {post.replies.length > 0 ? (
            post.replies.length
          ) : (
            <span className="opacity-0"> 0</span>
          )}
        </div>
      </button>
      {isReplyBtnClick && (
        <>
          <div className="fixed inset-0 z-20 h-screen min-w-[480px] sm:top-1/2 sm:left-1/2 sm:h-min sm:w-[500px]  sm:-translate-x-1/2 sm:-translate-y-1/2">
            <PostReplyForm
              originalPost={post}
              closeHandler={() => setIsReplyBtnClick(false)}
            />
          </div>
          <BackDrop
            handleClose={() => setIsReplyBtnClick(false)}
            color="blue"
          />
        </>
      )}
      {IsModalShow && (
        <LogInModal
          iconDetail={{ icon: ChatFillIcon, color: "pri" }}
          title="Reply to join the conversation."
          text={`Once you join Socia, you can respond to ${getPostCreator(
            post.createBy
          )?.displayName.toUpperCase()}'s Post.`}
          closeHandler={() => setIsModalShow(false)}
        />
      )}
    </>
  );
}

export default ReplyUI;
