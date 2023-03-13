import { useEffect, useMemo } from "react";
import useTweetControls from "../../redux/control/tweetControls";
import useLocalStorage from "../../hooks/useLocalStorage";
import { TweetType } from "../../types";
import Feed from "./Feed";

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
      {sortedTweets.map((tweet: TweetType) => (
        <Feed key={tweet.tid} tweet={tweet} />
      ))}
    </>
  );
}

export default FeedList;
