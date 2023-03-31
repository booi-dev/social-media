import { addDataToDb, deleteDataFromDb, updateDataInDb } from "../../../data";

import useUserControls from "../../../redux/control/userControls";
import useLocalStorage from "../../../hooks/useLocalStorage";
import usePostControls from "../../../redux/control/postControls";

import { PostType } from "../../../types";

function usePostActions() {
  const { user } = useUserControls();
  const { updatePost } = usePostControls();
  const { updateData } = useLocalStorage();

  // CREATE
  const createNewPost = (newPost: PostType) => {
    console.log(newPost);
    addDataToDb("posts", newPost);
  };

  // DELETE

  const deleteExistingPost = (postId: string) => {
    console.log(postId);
    deleteDataFromDb("posts", "pid", postId);
  };

  // REPLY TWEET
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

  //  RETWEET
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

  // UNDO RETWEET
  const undoRePost = (originalPost: PostType) => {
    originalPost.reposts.forEach((repost) => {
      if (repost.byUid === user.uid) {
        deleteExistingPost(repost.postId);
      }
    });
    updatePost(originalPost.pid, {
      reposts: [
        ...originalPost.reposts.filter((repost) => repost.byUid !== user.uid),
      ],
    });
    updateData(originalPost.pid, {
      reposts: [
        ...originalPost.reposts.filter((repost) => repost.byUid !== user.uid),
      ],
    });
  };

  // LIKE & UNDO UNLIKE

  const likePost = (targetPost: PostType) => {
    if (targetPost.likes.includes(user.uid)) {
      updatePost(targetPost.pid, {
        likes: [...targetPost.likes.filter((like) => like !== user.uid)],
      });
      updateData(targetPost.pid, {
        likes: [...targetPost.likes.filter((like) => like !== user.uid)],
      });
      return;
    }

    updatePost(targetPost.pid, { likes: [...targetPost.likes, user.uid] });
    updateData(targetPost.pid, { likes: [...targetPost.likes, user.uid] });
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
