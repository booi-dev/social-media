import { useState, useEffect } from "react";
import { getDataFromDb, useGetRealDataFromDb } from "../data";

import { PostType, UserType } from "../types";

function usePostData() {
  const useGetPostCreatorFromPostId = (postId: string) => {
    const [originalPostCreator, setOriginalPostCreator] = useState<UserType>();

    useEffect(() => {
      const getPostCreator = async () => {
        try {
          const originalPost = await getDataFromDb<PostType>("posts", postId);
          const postCreator = await getDataFromDb<UserType>(
            "users",
            originalPost.createBy
          );
          setOriginalPostCreator(postCreator);
        } catch (err) {
          console.log(err);
        }
      };
      getPostCreator();
    }, []);

    return originalPostCreator;
  };

  const useGetRealTimePost = (toGetPostId: string) => {
    const post = useGetRealDataFromDb<PostType>("posts", "pid", toGetPostId);
    return post;
  };

  return { useGetPostCreatorFromPostId, useGetRealTimePost };
}

export default usePostData;
