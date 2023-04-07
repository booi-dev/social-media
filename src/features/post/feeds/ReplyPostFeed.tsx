import { useState, useEffect } from "react";
import Feed from "./Feed";

import { useGetDataFromDb, useGetRealDataFromDb } from "../../../data";

import ActionsPanel from "../components/ActionsPanel";

import { PostType } from "../../../types";

type TypeStateType = {
  type: "reply";
  originalPostId: string;
};

type ReplyPostFeedType = {
  post: PostType;
  typeState: TypeStateType;
};

function ReplyPostFeed(props: ReplyPostFeedType) {
  const { post, typeState } = props;

  const [wrappedPost, setWrappedPost] = useState<React.ReactElement | null>(
    null
  );

  const originalPost = useGetRealDataFromDb<PostType>(
    "posts",
    "pid",
    typeState.originalPostId
  );

  useEffect(() => {
    console.log("op", originalPost);
    if (originalPost) {
      setWrappedPost(
        <div className="border-t border-app-white-5 dark:border-app-gray-1">
          <Feed post={originalPost} typeState={typeState} />
        </div>
      );
    } else {
      setWrappedPost(
        <div className="text-app-gray-3"> [ post not found ] </div>
      );
    }
  }, [originalPost, typeState]);

  return (
    <div>
      <Feed
        post={post}
        typeState={typeState}
        actionsPanel={ActionsPanel}
        wrappedPost={wrappedPost}
      />
    </div>
  );
}

export default ReplyPostFeed;
