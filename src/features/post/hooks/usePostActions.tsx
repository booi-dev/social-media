import { PostType } from "../../../types";
import { useDb } from "../../../data";

import useUserControls from "../../../redux/control/userControls";
import useLocalStorage from "../../../hooks/useLocalStorage";
import usePostControls from "../../../redux/control/postControls";

function usePostActions() {
  const { addDataToDb } = useDb();
  const { user } = useUserControls();
  const { createPost, updatePost, deletePost } = usePostControls();
  const { addData, updateData, deleteData } = useLocalStorage();

  // CREATE
  const createNewPost = (newPost: PostType) => {
    createPost(newPost);
    console.log(newPost);
    addDataToDb(newPost, "posts");
  };

  // DELETE

  const deleteExistingPost = (postId: string) => {
    deletePost(postId);
    deleteData(postId);
  };

  // REPLY TWEET
  const addNewReply = (originalPost: PostType, newTId: string) => {
    updatePost(originalPost.pid, {
      replies: [...originalPost.replies, { byUid: user.uid, postId: newTId }],
    });
    updateData(originalPost.pid, {
      replies: [...originalPost.replies, { byUid: user.uid, postId: newTId }],
    });
  };

  //  RETWEET
  const rePost = (newPost: PostType, originalPost: PostType) => {
    createPost(newPost);
    addData(newPost);
    updatePost(originalPost.pid, {
      reposts: [
        ...originalPost.reposts,
        { byUid: user.uid, postId: newPost.pid },
      ],
    });
    updateData(originalPost.pid, {
      reposts: [
        ...originalPost.reposts,
        { byUid: user.uid, postId: newPost.pid },
      ],
    });
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

  return { createNewPost, addNewReply, rePost, undoRePost, likePost };
}

export default usePostActions;
