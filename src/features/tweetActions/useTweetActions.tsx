import { nanoid } from "@reduxjs/toolkit";

import { TweetType } from "../../types";

import useUserControls from "../../redux/control/userControls";
import useLocalStorage from "../../hooks/useLocalStorage";
import useTweetControls from "../../redux/control/tweetControls";

function useTweetActions() {
  const { user } = useUserControls();
  const { addData, updateData } = useLocalStorage();
  const { createTweet, updateTweet } = useTweetControls();

  const createNewTweet = (newTweet: TweetType) => {
    createTweet(newTweet);
    addData(newTweet);
  };

  const addNewReply = (originalTweet: TweetType) => {
    const newTId = nanoid();
    updateTweet(originalTweet.tid, {
      replies: [...originalTweet.replies, { byUid: user.uid, tweetId: newTId }],
    });
    updateData(originalTweet.tid, {
      replies: [...originalTweet.replies, { byUid: user.uid, tweetId: newTId }],
    });
  };

  return { addNewReply, createNewTweet };
}

export default useTweetActions;
