import { useAppSelector, useAppDispatch } from "../app/hooks";
import { create, destroy, update, replace } from "../slice/post";

import { PostType } from "../../types";

function usePostControls() {
  const postData = useAppSelector((state) => state.postStore.posts);
  const dispatch = useAppDispatch();

  const findPost = (pid: string): PostType | undefined =>
    postData.find((post) => post.pid === pid);

  const createPost = (t: PostType) => {
    console.log("add post to redux store");
    dispatch(create(t));
  };

  const deletePost = (tid: string) => {
    console.log("delete post from redux store");
    dispatch(destroy(tid));
  };

  const updatePost = (targetTId: string, tobeUpdateProperty: object) => {
    console.log("update post redux store");
    dispatch(update({ targetTId, tobeUpdateProperty }));
  };

  const replacePosts = (ts: PostType[]) => {
    dispatch(replace(ts));
  };

  return {
    postData,
    findPost,
    createPost,
    deletePost,
    updatePost,
    replacePosts,
  };
}

export default usePostControls;
