import { useState, useEffect } from "react";
import useTweetControls from "../../redux/control/tweetControls";
import useLocalStorage from "../../hooks/useLocalStorage";
import sortArray from "../../utils/sortArray";
import { TweetType } from "../../redux/slice/tweet";

import Feed from "./Feed";

function FeedList() {
  const { tweetData, replaceTweets } = useTweetControls();
  const { getData } = useLocalStorage();

  const [tweets, setTweets] = useState<TweetType[]>([]);

  useEffect(() => {
    replaceTweets(sortArray(getData()));
  }, []);

  useEffect(() => {
    setTweets(sortArray(tweetData));
  }, [tweetData]);

  return (
    <>
      {tweets.map((tweet: TweetType) => (
        <Feed key={tweet.id} tweet={tweet} />
      ))}
    </>
  );
}

export default FeedList;
