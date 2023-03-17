import { useEffect, useMemo } from "react";
import useTweetControls from "../../redux/control/tweetControls";
import useLocalStorage from "../../hooks/useLocalStorage";

import Feed from "./Feed";
import TweetActions from "../tweetActions/TweetActions";
import ReTweetFeed from "./ReTweetFeed";
import ReplyTweedFeed from "./ReplyTweedFeed";

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
        if (
          tweet.tweetType?.type === "retweet" &&
          tweet.tweetType.originalTweetId
        ) {
          return (
            <ReTweetFeed
              key={tweet.tid}
              tweet={tweet}
              typeState={{
                type: "retweet",
                originalTweetId: tweet.tweetType.originalTweetId,
              }}
            />
          );
        }
        if (
          tweet.tweetType?.type === "reply" &&
          tweet.tweetType.originalTweetId
        ) {
          return (
            <ReplyTweedFeed
              key={tweet.tid}
              tweet={tweet}
              typeState={{
                type: "reply",
                originalTweetId: tweet.tweetType.originalTweetId,
              }}
            />
          );
        }

        return (
          <div key={tweet.tid}>
            <Feed tweet={tweet} />
            <TweetActions tweet={tweet} typeState={{ type: "normal" }} />
          </div>
        );
      })}
    </div>
  );
}

export default FeedList;
