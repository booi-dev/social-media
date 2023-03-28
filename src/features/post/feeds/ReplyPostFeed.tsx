import Feed from "./Feed";

import usePostControls from "../../../redux/control/postControls";

import ActionsPanel from "../components/ActionsPanel";

import { PostType } from "../../../types";

type TypeStateType = {
  type: "normal" | "repost" | "reply" | "mention";
  originalPostId: string;
};

type ReplyPostFeedType = {
  post: PostType;
  typeState: TypeStateType;
};

function ReplyPostFeed(props: ReplyPostFeedType) {
  const { post, typeState } = props;

  const { findPost } = usePostControls();

  const originalPost: PostType | undefined = findPost(typeState.originalPostId);

  let wrappedPost: React.ReactElement | null = null;

  if (originalPost) {
    wrappedPost = (
      <div className="rounded-lg border-[1px] border-app-white-5 dark:border-app-gray-1">
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
