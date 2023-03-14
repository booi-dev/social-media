import { useEffect, useMemo } from "react";
import useTweetControls from "../../redux/control/tweetControls";
import useLocalStorage from "../../hooks/useLocalStorage";

import Feed from "./Feed";
import TweetActions from "./TweetActions";
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
    <>
      {sortedTweets.map((tweet: TweetType) => {
        if (tweet.tweetKind?.kind === "retweet") {
          return (
            <div
              key={tweet.tid}
              className="border-x-[1px] dark:border-app-gray-1"
            >
              <ReTweetFeed
                key={tweet.tid}
                tweet={tweet}
                tweetState={{
                  state: "retweet",
                  actionedTweetTid: tweet.tweetKind.referenceTid,
                }}
              />
              <TweetActions
                tweet={tweet}
                tweetState={{
                  state: "retweet",
                  actionedTweetTid: tweet.tweetKind.referenceTid,
                }}
              />
            </div>
          );
        }
        return (
          <div
            key={tweet.tid}
            className="border-x-[1px] dark:border-app-gray-1"
          >
            <Feed tweet={tweet} tweetState={{ state: "normal" }} />
            <TweetActions tweet={tweet} tweetState={{ state: "normal" }} />
          </div>
        );
      })}
    </>
  );
}

export default FeedList;
