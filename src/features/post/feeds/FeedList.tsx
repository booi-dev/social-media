import { useEffect, useMemo } from "react";
import useTweetControls from "../../../redux/control/tweetControls";
import useLocalStorage from "../../../hooks/useLocalStorage";

import Feed from "./Feed";
import ActionsPanel from "../components/ActionsPanel";

import ReplyPostFeed from "./ReplyPostFeed";

import { PostType } from "../../../types";

function FeedList() {
  const { getData } = useLocalStorage();
  const { tweetData, replaceTweets } = useTweetControls();
  const userData = getData();

  const sortArray = ([...toBeSortArray]: PostType[]) =>
    toBeSortArray.sort((a, b) => b.timespan - a.timespan);

  useEffect(() => {
    replaceTweets(userData);
  }, []);

  const sortedTweets = useMemo(() => sortArray(tweetData), [tweetData]);

  return (
    <div className="bg-inherit">
      {sortedTweets.map((p: PostType) => {
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
