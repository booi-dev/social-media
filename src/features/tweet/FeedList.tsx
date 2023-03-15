import { useEffect, useMemo } from "react";
import useTweetControls from "../../redux/control/tweetControls";
import useLocalStorage from "../../hooks/useLocalStorage";

import Feed from "./Feed";
import ReTweetFeed from "./ReTweetFeed";

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
      {sortedTweets.map((tweet: TweetType) => {
        if (tweet.tweetKind?.kind === "retweet") {
          return (
            <ReTweetFeed
              key={tweet.tid}
              tweet={tweet}
              actionState={{
                state: "retweet",
                actionTweetId: tweet.tweetKind.referenceTid,
              }}
            />
          );
        }
        return (
          <Feed
            key={tweet.tid}
            tweet={tweet}
            actionState={{ state: "normal" }}
          />
        );
      })}
    </div>
  );
}

export default FeedList;
