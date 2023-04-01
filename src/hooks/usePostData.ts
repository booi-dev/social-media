import { useState, useEffect } from "react";
import { getDataFromDb } from "../data";

import { PostType, UserType } from "../types";

function usePostData() {
  const useGetPostCreatorFromPostId = (postId: string) => {
    const [originalPostCreator, setOriginalPostCreator] = useState<UserType>();

    useEffect(() => {
      const getPostCreator = async () => {
        if (postId) {
          const originalPost = await getDataFromDb<PostType>("posts", postId);
          const postCreator = await getDataFromDb<UserType>(
            "users",
            originalPost.createBy
          );
          setOriginalPostCreator(postCreator);
        }
      };
      getPostCreator();
    }, []);

    return originalPostCreator;
  };

  return { useGetPostCreatorFromPostId };
}

export default usePostData;
