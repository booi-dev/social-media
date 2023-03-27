import { AiOutlineRetweet } from "react-icons/ai";

import useUserControls from "../../../redux/control/userControls";
import useTweetControls from "../../../redux/control/tweetControls";
import useGetProperties from "../../../hooks/useGetProperties";

import Feed from "./Feed";
import ActionsPanel from "../components/ActionsPanel";

import { PostType } from "../../../types";

type TypeStateType = {
  type: "normal" | "repost" | "reply" | "mention";
  originalPostId: string;
};

type ReTweetFeedType = {
  post: PostType;
  typeState: TypeStateType;
};

function RePostFeed(props: ReTweetFeedType) {
  const { post, typeState } = props;

  const { user } = useUserControls();
  const { findTweet } = useTweetControls();
  const { getTweetCreator } = useGetProperties();

  const postCreator = getTweetCreator(post.createBy);

  const originalPost: PostType | undefined = findTweet(
    typeState.originalPostId
  );

  return (
    <div className="border-inherit">
      <h1 className="flex items-center gap-2 px-2 pt-2 text-app-font-14 font-bold text-app-gray-3 ">
        <AiOutlineRetweet className="stroke-2" />
        {`${
          user.uid === postCreator?.uid ? "You" : postCreator?.displayName
        } Retweeted`}
      </h1>
      {originalPost ? (
        <div>
          <Feed
            post={originalPost}
            typeState={typeState}
            actionsPanel={ActionsPanel}
          />
        </div>
      ) : (
        <div className="border-b-[1px] border-inherit px-2 text-app-gray-3">
          --Tweet not found
        </div>
      )}
    </div>
  );
}

export default RePostFeed;
