import { useEffect } from "react";
import useTweetControls from "../../redux/control/tweetControls";
import useLocalStorage from "../../hooks/useLocalStorage";
import { TweetType } from "../../redux/slice/tweet";

import Feed from "./Feed";

function FeedList() {
  const { tweetData, replaceTweets } = useTweetControls();
  const { getData } = useLocalStorage();

  useEffect(() => {
    replaceTweets(getData());
  }, []);

  console.log(getData());

  return (
    <>
      {tweetData.map((tweet: TweetType) => (
        <Feed key={tweet.id} tweet={tweet} />
      ))}
    </>
  );
}

export default FeedList;
