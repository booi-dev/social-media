import { useAppSelector, useAppDispatch } from "../app/hooks";
import { create, destroy, TweetType } from "../slice/tweet";

function useTweetControls() {
  const tweetData = useAppSelector((state) => state.tweetStore.tweets);
  const dispatch = useAppDispatch();

  const createTweet = (t: TweetType) => {
    dispatch(create(t));
  };

  const deleteTweet = (t: TweetType) => {
    dispatch(destroy(t));
  };

  return { tweetData, createTweet, deleteTweet };
}

export default useTweetControls;
