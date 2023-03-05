import { useAppSelector, useAppDispatch } from "../app/hooks";
import { create, destroy, replace, TweetType } from "../slice/tweet";

function useTweetControls() {
  const tweetData = useAppSelector((state) => state.tweetStore.tweets);
  const dispatch = useAppDispatch();

  const createTweet = (t: TweetType) => {
    dispatch(create(t));
  };

  const deleteTweet = (t: TweetType) => {
    dispatch(destroy(t));
  };

  const replaceTweets = (ts: TweetType[]) => {
    dispatch(replace(ts));
  };

  return { tweetData, createTweet, deleteTweet, replaceTweets };
}

export default useTweetControls;
