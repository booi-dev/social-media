import { nanoid } from "@reduxjs/toolkit";

import usePostActions from "../hooks/usePostActions";
import useGetProperties from "../../../hooks/useGetProperties";

import { CloseIcon } from "../../../components/icons";
import { AppIcon } from "../../../components/UI";

import PostSignature, { PostCreatorPic } from "../components/PostSignature";
import PostForm from "../components/PostForm";

import { PostType } from "../../../types";

type PostReplyFormType = {
  originalPost: PostType;
  closeHandler: () => void;
};

function PostReplyForm(props: PostReplyFormType) {
  const { closeHandler, originalPost } = props;

  const { createNewPost, addNewReply } = usePostActions();
  const { getPostCreator } = useGetProperties();

  const originalPostCreator = getPostCreator(originalPost.createBy);

  const newPId = nanoid();

  const handleSubmit = (newPost: PostType) => {
    createNewPost(newPost);
    addNewReply(originalPost, newPId);
  };

  return (
    <div className="relative z-20 h-full w-screen rounded-sm bg-app-white-1 shadow shadow-app-gray-3 dark:bg-app-black-1  dark:shadow-none sm:w-full">
      <button type="button" onClick={closeHandler} className="m-1">
        <AppIcon icon={CloseIcon} size={26} hoverColor="pri" />
      </button>

      <div className="flex flex-col px-4 ">
        <div className="flex gap-4 ">
          <div className="h-14 w-14 shrink-0">
            <PostCreatorPic postCreatorUid={originalPost.createBy} />
          </div>
          <div className="flex items-center gap-1.5 text-inherit">
            <PostSignature
              postCreatorUid={originalPost.createBy}
              postTimespan={originalPost.timespan}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex w-12 justify-center">
            <div className="h-full w-[1px] bg-app-white-3 dark:bg-app-gray-3" />
          </div>
          <div>{originalPost.post}</div>
        </div>
        <div className="flex gap-4">
          <div className="flex w-12 justify-center">
            <div className="h-full w-[1px] bg-app-white-3 dark:bg-app-gray-3" />
          </div>
          <h1 className=" py-3 text-app-gray-3">
            Replying to
            <span className="text-pri-clr-1">
              @{originalPostCreator?.userName}
            </span>
          </h1>
        </div>
      </div>

      <div className="py-2 px-4 ">
        <PostForm
          newPId={newPId}
          submitHandler={handleSubmit}
          closeHandler={closeHandler}
          postHaveType={{
            type: "reply",
            originalPostId: originalPost.pid,
          }}
          isLargeTextArea
          isFilterBtnHidden
        />
      </div>
    </div>
  );
}

export default PostReplyForm;
