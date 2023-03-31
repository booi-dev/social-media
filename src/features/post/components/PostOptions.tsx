import { useState } from "react";

import { useNoti } from "../../../noti";
import usePostActions from "../hooks/usePostActions";

import { PinIcon, DeleteIcon } from "../../../components/icons";
import { WarningMsg } from "../../../components/UI";

import { PostType } from "../../../types";

type PostOptionsType = {
  post: PostType;
};

function PostOptions({ post }: PostOptionsType) {
  //
  const { deleteExistingPost } = usePostActions();
  const { setNoti } = useNoti();

  const [isWarning, setIsWarning] = useState(false);

  const deleteRePosts = () => {
    post.reposts.forEach((retweeets) => {
      deleteExistingPost(retweeets.postId);
    });
  };

  const handleDelete = () => {
    deleteRePosts();
    deleteExistingPost(post.pid);
    setNoti("Your post is deleleted", 3, "top-center");
  };

  return (
    <>
      <div className="text-app-font-17 font-bold text-inherit">
        <button
          type="button"
          className="flex w-full items-center gap-2 p-3 text-left text-red-500 hover:bg-app-white-2 dark:hover:bg-app-gray-1"
          onClick={() => setIsWarning(true)}
        >
          <DeleteIcon />
          Delete
        </button>

        <button
          type="button"
          className="flex w-full items-center gap-2 p-3 text-left text-inherit hover:bg-app-white-2 dark:hover:bg-app-gray-1"
        >
          <PinIcon />
          Pin to your profile
        </button>
      </div>
      {isWarning && (
        <div className="bg-inherit text-inherit">
          <WarningMsg
            warningText="Delete Post?"
            warningDesc="This cant be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Socia search results."
            warningBtn="Delete"
            handleConfirm={handleDelete}
            handleWarningClose={() => setIsWarning(false)}
          />
        </div>
      )}
    </>
  );
}

export default PostOptions;
