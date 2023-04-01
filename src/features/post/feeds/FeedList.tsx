import { useMemo } from "react";
import { useGetSomeRealDataFromDb } from "../../../data";

import Feed from "./Feed";
import ActionsPanel from "../components/ActionsPanel";

import ReplyPostFeed from "./ReplyPostFeed";

import { PostType } from "../../../types";

function FeedList() {
  const sortArray = ([...toBeSortArray]: PostType[]) =>
    toBeSortArray.sort((a, b) => b.timespan - a.timespan);

  const posts = useGetSomeRealDataFromDb<PostType>("posts", 10);

  const sortedPosts = useMemo(() => sortArray(posts), [posts]);

  return (
    <>
      {sortedPosts.map((p: PostType) => (
        <div key={p.pid}>
          {(p.postType.type === "normal" || p.postType.type === "repost") && (
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
