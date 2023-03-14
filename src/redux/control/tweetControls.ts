import { useAppSelector, useAppDispatch } from "../app/hooks";
import { create, destroy, replace } from "../slice/tweet";

import { TweetType } from "../../types";

function useTweetControls() {
  const tweetData = useAppSelector((state) => state.tweetStore.tweets);
  const dispatch = useAppDispatch();

  const createTweet = (t: TweetType) => {
    dispatch(create(t));
  };

  const deleteTweet = (tid: string) => {
    dispatch(destroy(tid));
  };

  const findTweet = (tid: string) =>
    tweetData.find((tweet) => tweet.tid === tid);

  const replaceTweets = (ts: TweetType[]) => {
    dispatch(replace(ts));
  };

  return { tweetData, createTweet, deleteTweet, findTweet, replaceTweets };
}

export default useTweetControls;
