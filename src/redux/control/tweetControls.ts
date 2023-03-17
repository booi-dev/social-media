import { useAppSelector, useAppDispatch } from "../app/hooks";
import { create, destroy, update, replace } from "../slice/tweet";

import { TweetType } from "../../types";

function useTweetControls() {
  const tweetData = useAppSelector((state) => state.tweetStore.tweets);
  const dispatch = useAppDispatch();

  const findTweet = (tid: string): TweetType | undefined =>
    tweetData.find((tweet) => tweet.tid === tid);

  const createTweet = (t: TweetType) => {
    console.log("add tweet to redux store");
    dispatch(create(t));
  };

  const deleteTweet = (tid: string) => {
    console.log("delete tweet from redux store");
    dispatch(destroy(tid));
  };

  const updateTweet = (targetTId: string, tobeUpdateProperty: object) => {
    console.log("update tweet redux store");
    dispatch(update({ targetTId, tobeUpdateProperty }));
  };

  const replaceTweets = (ts: TweetType[]) => {
    dispatch(replace(ts));
  };

  return {
    tweetData,
    findTweet,
    createTweet,
    deleteTweet,
    updateTweet,
    replaceTweets,
  };
}

export default useTweetControls;
