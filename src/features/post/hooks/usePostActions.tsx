import {
  addDataToDb,
  getDataFromDb,
  deleteDataFromDb,
  updateDataInDb,
} from "../../../data";

import useUserControls from "../../../redux/control/userControls";

import { PostType } from "../../../types";

function usePostActions() {
  const { user } = useUserControls();

  // CREATE POST
  const createNewPost = (newPost: PostType) => {
    console.log(newPost);
    addDataToDb("posts", newPost);
  };

  // DELETE POST

  const deletePost = (postId: string) => {
    deleteDataFromDb("posts", "pid", postId);
  };

  const deleteOriginalPost = async (
    originalPostId: string,
    targetField: string,
    toRemovePostId: string
  ) => {
    const originalPost = await getDataFromDb<PostType>("posts", originalPostId);

    updateDataInDb("posts", "pid", originalPostId, {
      [targetField]: [
        ...originalPost.replies.filter(
          (reply) => reply.postId !== toRemovePostId
        ),
      ],
    });
  };

  //  REPOST
  const rePost = (newPost: PostType, originalPost: PostType) => {
    addDataToDb("posts", newPost);

    const originalPostId = originalPost.pid;
    const tobeUpdatedProperty = {
      reposts: [
        ...originalPost.reposts,
        { byUid: user.uid, postId: newPost.pid },
      ],
    };
    updateDataInDb("posts", "pid", originalPostId, tobeUpdatedProperty);
  };

  // UNDO REPOST
  const undoRePost = (originalPost: PostType) => {
    originalPost.reposts.forEach((repost) => {
      if (repost.byUid === user.uid) deletePost(repost.postId);
    });

    const originalPostId = originalPost.pid;
    const tobeUpdatedProperty = {
      reposts: [
        ...originalPost.reposts.filter((repost) => repost.byUid !== user.uid),
      ],
    };
    updateDataInDb("posts", "pid", originalPostId, tobeUpdatedProperty);
  };

  // LIKE & UNDO LIKE POST

  const likePost = (targetPost: PostType) => {
    if (targetPost.likes.includes(user.uid)) {
      updateDataInDb("posts", "pid", targetPost.pid, {
        likes: [...targetPost.likes.filter((like) => like !== user.uid)],
      });
      return;
    }
    updateDataInDb("posts", "pid", targetPost.pid, {
      likes: [...targetPost.likes, user.uid],
    });
  };

  // REPLY POST
  const addNewReply = (originalPost: PostType, newPId: string) => {
    const tobeUpdatedProperty = {
      replies: [...originalPost.replies, { byUid: user.uid, postId: newPId }],
    };
    updateDataInDb("posts", "pid", originalPost.pid, tobeUpdatedProperty);
  };

  return {
    createNewPost,
    addNewReply,
    rePost,
    deletePost,
    deleteOriginalPost,
    undoRePost,
    likePost,
  };
}

export default usePostActions;
