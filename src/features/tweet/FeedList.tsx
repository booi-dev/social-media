import { useEffect, useMemo } from "react";
import useTweetControls from "../../redux/control/tweetControls";
import useLocalStorage from "../../hooks/useLocalStorage";
import sortArray from "../../utils/sortArray";
import { TweetType } from "../../redux/slice/tweet";

import Feed from "./Feed";

function FeedList() {
  const { tweetData, replaceTweets } = useTweetControls();
  const { getData } = useLocalStorage();

  useEffect(() => {
    replaceTweets(sortArray(getData()));
  }, []);

  const sortedTweets = useMemo(
    () => [...tweetData].sort((a, b) => b.timespan - a.timespan),
    [tweetData]
  );

  return (
    <>
      {sortedTweets.map((tweet: TweetType) => (
        <Feed key={tweet.id} tweet={tweet} />
      ))}
    </>
  );
}

export default FeedList;
