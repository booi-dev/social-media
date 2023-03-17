import { useEffect, useMemo } from "react";
import useTweetControls from "../../redux/control/tweetControls";
import useLocalStorage from "../../hooks/useLocalStorage";

import Feed from "./Feed";
import TweetActions from "../tweetActions/TweetActions";
import ReTweetFeed from "./ReTweetFeed";
import ReplyTweedFeed from "./ReplyTweetFeed";

import { TweetType } from "../../types";

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
    <div className="bg-inherit border-x-[1px] border-b-[1px] dark:border-app-gray-1">
      {sortedTweets.map((t: TweetType) => {
        if (t.tweetType?.type === "retweet" && t.tweetType.originalTweetId) {
          return (
            <ReTweetFeed
              key={t.tid}
              tweet={t}
              typeState={{
                type: "retweet",
                originalTweetId: t.tweetType.originalTweetId,
              }}
            />
          );
        }
        if (t.tweetType?.type === "reply" && t.tweetType.originalTweetId) {
          return (
            <ReplyTweedFeed
              key={t.tid}
              tweet={t}
              typeState={{
                type: "reply",
                originalTweetId: t.tweetType.originalTweetId,
              }}
            />
          );
        }

        return (
          <div key={t.tid}>
            <Feed
              tweet={t}
              typeState={{ type: "normal" }}
              tweetActions={TweetActions}
            />
            {/* <TweetActions tweet={tweet} typeState={{ type: "normal" }} /> */}
          </div>
        );
      })}
    </div>
  );
}

export default FeedList;
