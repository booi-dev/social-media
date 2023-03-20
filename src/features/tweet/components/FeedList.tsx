import { useEffect, useMemo } from "react";
import useTweetControls from "../../../redux/control/tweetControls";
import useLocalStorage from "../../../hooks/useLocalStorage";

import Feed from "../feeds/Feed";
import TweetActionsUI from "./TweetActionsUI";
import ReTweetFeed from "../feeds/ReTweetFeed";
import ReplyTweedFeed from "../feeds/ReplyTweetFeed";

import { TweetType } from "../../../types";

function FeedList() {
  const { getData } = useLocalStorage();
  const { tweetData, replaceTweets } = useTweetControls();
  const userData = getData();

  const sortArray = ([...toBeSortArray]: TweetType[]) =>
    toBeSortArray.sort((a, b) => b.timespan - a.timespan);

  useEffect(() => {
    replaceTweets(userData);
  }, []);

  const sortedTweets = useMemo(() => sortArray(tweetData), [tweetData]);

  return (
    <div className="bg-inherit">
      {sortedTweets.map((t: TweetType) => {
        if (t.tweetType?.type === "retweet" && t.tweetType.originalTweetId) {
          return (
            <div
              key={t.tid}
              className="border-x-[1px] border-b-[1px] border-app-white-5 dark:border-app-gray-1"
            >
              <ReTweetFeed
                tweet={t}
                typeState={{
                  type: "retweet",
                  originalTweetId: t.tweetType.originalTweetId,
                }}
              />
            </div>
          );
        }
        if (t.tweetType?.type === "reply" && t.tweetType.originalTweetId) {
          return (
            <div
              key={t.tid}
              className="border-b-[1px] border-x-[1px] border-app-white-5  dark:border-app-gray-1"
            >
              <ReplyTweedFeed
                tweet={t}
                typeState={{
                  type: "reply",
                  originalTweetId: t.tweetType.originalTweetId,
                }}
              />
            </div>
          );
        }

        return (
          <div
            key={t.tid}
            className="border-x-[1px] border-b-[1px] border-app-white-5  dark:border-app-gray-1"
          >
            <Feed
              tweet={t}
              typeState={{ type: "normal" }}
              tweetActionsUI={TweetActionsUI}
            />
          </div>
        );
      })}
    </div>
  );
}

export default FeedList;
