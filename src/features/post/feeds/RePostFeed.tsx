import { AiOutlineRetweet } from "react-icons/ai";

import useUserControls from "../../../redux/control/userControls";
import { useGetDataFromDb } from "../../../data";

import Feed from "./Feed";
import ActionsPanel from "../components/ActionsPanel";

import { PostType, UserType } from "../../../types";

type TypeStateType = {
  type: "normal" | "repost" | "reply" | "mention";
  originalPostId: string;
};

type RePostFeedType = {
  post: PostType;
  typeState: TypeStateType;
};

function RePostFeed(props: RePostFeedType) {
  const { post, typeState } = props;

  const { user } = useUserControls();

  const postCreator = useGetDataFromDb<UserType>("users", post.createBy);

  const originalPost = useGetDataFromDb<PostType>(
    "posts",
    typeState.originalPostId
  );

  return (
    <div className="border-inherit">
      <h1 className="flex items-center gap-2 px-2 pt-2 text-app-font-14 font-bold text-app-gray-3 ">
        <AiOutlineRetweet className="stroke-2" />
        {`${
          user.uid === postCreator?.uid ? "You" : postCreator?.displayName
        } Reposted`}
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
          --Post not found
        </div>
      )}
    </div>
  );
}

export default RePostFeed;
