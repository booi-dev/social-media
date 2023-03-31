import { useEffect, useMemo } from "react";
import usePostControls from "../../../redux/control/postControls";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useDb } from "../../../data";

import Feed from "./Feed";
import ActionsPanel from "../components/ActionsPanel";

import ReplyPostFeed from "./ReplyPostFeed";

import { PostType } from "../../../types";

function FeedList() {
  // const { getData } = useLocalStorage();
  const { useGetDataALlFromDb } = useDb();
  // const { postData, replacePosts } = usePostControls();
  // const userData = getData();

  const sortArray = ([...toBeSortArray]: PostType[]) =>
    toBeSortArray.sort((a, b) => b.timespan - a.timespan);

  const posts = useGetDataALlFromDb<PostType>("posts");

  console.log(posts);
  // useEffect(() => {
  //   replacePosts(userData);
  // }, []);

  const sortedPosts = useMemo(() => sortArray(posts), [posts]);

  return (
    <div className="bg-inherit">
      {sortedPosts.map((p: PostType) => {
        if (p.postType?.type === "reply" && p.postType.originalPostId) {
          return (
            <div
              key={p.pid}
              className="border-x-[1px] border-b-[1px] border-app-white-5  dark:border-app-gray-1"
            >
              <ReplyPostFeed
                post={p}
                typeState={{
                  type: "reply",
                  originalPostId: p.postType.originalPostId,
                }}
              />
            </div>
          );
        }

        return (
          <div
            key={p.pid}
            className="border-x-[1px] border-b-[1px] border-app-white-5  dark:border-app-gray-1"
          >
            <Feed
              post={p}
              typeState={{ type: "normal" }}
              actionsPanel={ActionsPanel}
            />
          </div>
        );
      })}
    </div>
  );
}

export default FeedList;
