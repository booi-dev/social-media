import { useAppSelector, useAppDispatch } from "../app/hooks";
import { create, destroy, replace } from "../slice/tweet";

import { TweetType } from "../../types";

function useTweetControls() {
  const tweetData = useAppSelector((state) => state.tweetStore);
  const dispatch = useAppDispatch();

  const createTweet = (t: TweetType) => {
    dispatch(create(t));
  };

  const deleteTweet = (tid: string) => {
    dispatch(destroy(tid));
  };

  const replaceTweets = (ts: TweetType[]) => {
    dispatch(replace(ts));
  };

  return { tweetData, createTweet, deleteTweet, replaceTweets };
}

export default useTweetControls;
