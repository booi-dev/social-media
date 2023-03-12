import { useEffect, useMemo } from "react";
import useTweetControls from "../../redux/control/tweetControls";
import useLocalStorage from "../../hooks/useLocalStorage";
import { TweetType } from "../../types";
import Feed from "./Feed";

function FeedList() {
  const { tweetData, replaceTweets } = useTweetControls();
  const { getData } = useLocalStorage();

  const sortArray = ([...toBeSortArray]: TweetType[]) =>
    toBeSortArray.sort((a, b) => b.timespan - a.timespan);

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
        <Feed key={tweet.tid} tweet={tweet} />
      ))}
    </>
  );
}

export default FeedList;
