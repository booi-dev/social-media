import { nanoid } from "@reduxjs/toolkit";
import { AiOutlineRetweet } from "react-icons/ai";
import { TbPencilMinus } from "react-icons/tb";

import useUserControls from "../../../redux/control/userControls";
import usePostActions from "../hooks/usePostActions";
import { useNoti } from "../../../noti";

import BackDrop from "../../../components/ui/BackDrop";

import { PostType } from "../../../types";

type RePostPanelType = {
  post: PostType;
  closeHandler: () => void;
  repostState: {
    state: boolean;
    rePostId?: string;
  };
};

function RePostPanel(props: RePostPanelType) {
  const { post, repostState, closeHandler } = props;

  const { user } = useUserControls();
  const { rePost, undoRePost } = usePostActions();
  const { setNoti } = useNoti();

  const newTid = nanoid();

  const newPost: PostType = {
    ...post,
    post: "reposting..",
    timespan: Date.now(),
    createBy: user.uid,
    hashtags: [],
    likes: [],
    replies: [],
    postType: {
      type: "repost",
      originalPostId: post.pid,
    },
    pid: newTid,
  };

  const handleRePost = () => {
    rePost(newPost, post);
    setNoti("Post sent");
    closeHandler();
  };

  const handleUndoRePost = () => {
    undoRePost(post);
    setNoti("Post undo");
    closeHandler();
  };

  return (
    <>
      <div className="absolute -right-5 -left-5 -bottom-10 z-20 flex w-[170px] flex-col gap-3 rounded-sm bg-app-white-1 p-3 font-bold text-inherit shadow shadow-app-gray-3 dark:bg-app-black-1">
        {repostState.state ? (
          <button
            type="button"
            onClick={handleUndoRePost}
            className="flex items-center gap-2"
          >
            <AiOutlineRetweet />
            Undo Repost
          </button>
        ) : (
          <button
            type="button"
            onClick={handleRePost}
            className="flex items-center gap-2"
          >
            <AiOutlineRetweet />
            Repost
          </button>
        )}

        <button type="button" className="flex items-center gap-2">
          <TbPencilMinus />
          Quote Post
        </button>
      </div>
      <BackDrop handleClose={closeHandler} />
    </>
  );
}

export default RePostPanel;
