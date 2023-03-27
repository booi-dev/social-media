import Feed from "./Feed";

import useTweetControls from "../../../redux/control/tweetControls";

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

  const { findTweet } = useTweetControls();

  const originalTweet: PostType | undefined = findTweet(
    typeState.originalPostId
  );

  let wrappedTweet: React.ReactElement | null = null;

  if (originalTweet) {
    wrappedTweet = (
      <div className="rounded-lg border-[1px] border-app-white-5 dark:border-app-gray-1">
        <Feed post={originalTweet} typeState={typeState} />
      </div>
    );
  }

  return (
    <div>
      <Feed
        post={post}
        typeState={typeState}
        actionsPanel={ActionsPanel}
        wrappedTweet={wrappedTweet}
      />
    </div>
  );
}

export default ReplyPostFeed;
