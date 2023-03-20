import { TweetType } from "../../types";

import useUserControls from "../../redux/control/userControls";
import useLocalStorage from "../../hooks/useLocalStorage";
import useTweetControls from "../../redux/control/tweetControls";

function useTweetActions() {
  const { user } = useUserControls();
  const { createTweet, updateTweet, deleteTweet } = useTweetControls();
  const { addData, updateData, deleteData } = useLocalStorage();

  // CREATE
  const createNewTweet = (newTweet: TweetType) => {
    createTweet(newTweet);
    addData(newTweet);
  };

  // DELETE

  const deleteExistingTweet = (tweetId: string) => {
    deleteTweet(tweetId);
    deleteData(tweetId);
  };

  // REPLY TWEET
  const addNewReply = (originalTweet: TweetType, newTId: string) => {
    updateTweet(originalTweet.tid, {
      replies: [...originalTweet.replies, { byUid: user.uid, tweetId: newTId }],
    });
    updateData(originalTweet.tid, {
      replies: [...originalTweet.replies, { byUid: user.uid, tweetId: newTId }],
    });
  };

  //  RETWEET
  const reTweet = (newTweet: TweetType, originalTweet: TweetType) => {
    createTweet(newTweet);
    addData(newTweet);
    updateTweet(originalTweet.tid, {
      reTweets: [
        ...originalTweet.reTweets,
        { byUid: user.uid, tweetId: newTweet.tid },
      ],
    });
    updateData(originalTweet.tid, {
      reTweets: [
        ...originalTweet.reTweets,
        { byUid: user.uid, tweetId: newTweet.tid },
      ],
    });
  };

  // UNDO RETWEET
  const undoReTweet = (originalTweet: TweetType) => {
    originalTweet.reTweets.forEach((retweet) => {
      if (retweet.byUid === user.uid) {
        deleteExistingTweet(retweet.tweetId);
      }
    });
    updateTweet(originalTweet.tid, {
      reTweets: [
        ...originalTweet.reTweets.filter(
          (retweet) => retweet.byUid !== user.uid
        ),
      ],
    });
    updateData(originalTweet.tid, {
      reTweets: [
        ...originalTweet.reTweets.filter(
          (retweet) => retweet.byUid !== user.uid
        ),
      ],
    });
  };

  // Like

  const likeTweet = (targetTweet: TweetType) => {
    updateTweet(targetTweet.tid, { likes: [...targetTweet.likes, user.uid] });
    updateData(targetTweet.tid, { likes: [...targetTweet.likes, user.uid] });
  };

  return { createNewTweet, addNewReply, reTweet, undoReTweet, likeTweet };
}

export default useTweetActions;
