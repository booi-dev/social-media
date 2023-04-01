import Feed from "./Feed";

import { useGetDataFromDb } from "../../../data";

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

  const originalPost = useGetDataFromDb<PostType>(
    "posts",
    typeState.originalPostId
  );

  let wrappedPost: React.ReactElement | null = null;

  if (originalPost) {
    wrappedPost = (
      <div className="border-t border-app-white-5 dark:border-app-gray-1">
        <Feed post={originalPost} typeState={typeState} />
      </div>
    );
  }

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
