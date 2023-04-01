import { addDataToDb, deleteDataFromDb, updateDataInDb } from "../../../data";

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

  const deleteExistingPost = (postId: string) => {
    console.log(postId);
    deleteDataFromDb("posts", "pid", postId);
  };

  // REPLY POST
  const addNewReply = (
    originalPost: PostType,
    postId: string,
    newTId: string
  ) => {
    // updatePost(originalPost.pid, {
    //   replies: [...originalPost.replies, { byUid: user.uid, postId: newTId }],
    // });
    // updateData(originalPost.pid, {
    //   replies: [...originalPost.replies, { byUid: user.uid, postId: newTId }],
    // });
    // updateDataInDb("posts", "pid", postId);
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
      if (repost.byUid === user.uid) deleteExistingPost(repost.postId);
    });

    const originalPostId = originalPost.pid;
    const tobeUpdatedProperty = {
      reposts: [
        ...originalPost.reposts.filter((repost) => repost.byUid !== user.uid),
      ],
    };
    updateDataInDb("posts", "pid", originalPostId, tobeUpdatedProperty);
  };

  // LIKE & UNDO UNLIKE

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

  return {
    createNewPost,
    addNewReply,
    rePost,
    deleteExistingPost,
    undoRePost,
    likePost,
  };
}

export default usePostActions;
