import { useGetSomeRealDataFromDb } from "../../../data";

import Feed from "./Feed";
import ActionsPanel from "../components/ActionsPanel";

import ReplyPostFeed from "./ReplyPostFeed";

import { PostType } from "../../../types";

function FeedList() {
  const posts = useGetSomeRealDataFromDb<PostType>("posts", 50);

  return (
    <>
      {posts.map((p: PostType) => (
        <div key={p.pid}>
          {p.postType.type === "normal" && (
            <Feed
              post={p}
              typeState={{ type: "normal" }}
              actionsPanel={ActionsPanel}
            />
          )}

          {p.postType?.type === "reply" && p.postType.originalPostId && (
            <ReplyPostFeed
              post={p}
              typeState={{
                type: "reply",
                originalPostId: p.postType.originalPostId,
              }}
            />
          )}
        </div>
      ))}
    </>
  );
}

export default FeedList;
