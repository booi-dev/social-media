import { useState, useEffect } from "react";

import usePostData from "../../../hooks/usePostData";

import Feed from "./Feed";
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

  const { useGetRealTimePost } = usePostData();

  const [wrappedPost, setWrappedPost] = useState<React.ReactElement | null>(
    null
  );

  const originalPost = useGetRealTimePost(typeState.originalPostId);

  useEffect(() => {
    if (originalPost.error) {
      setWrappedPost(
        <div className="text-app-gray-3"> [ original post not found ] </div>
      );
    } else if (originalPost.data) {
      setWrappedPost(
        <div className="border-t border-app-white-5 dark:border-app-gray-1">
          <Feed post={originalPost.data} typeState={typeState} />
        </div>
      );
    }
  }, [originalPost.data, originalPost.error, typeState]);

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
