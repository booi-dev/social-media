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
    <>
      {sortedTweets.map((tweet: TweetType) => {
        if (tweet.tweetKind?.kind === "retweet") {
          return <ReTweetFeed key={tweet.tid} tweet={tweet} />;
        }
        return (
          <Feed
            key={tweet.tid}
            tweet={tweet}
            tweetState={{ state: "normal" }}
          />
        );
      })}
    </>
  );
}

export default FeedList;
