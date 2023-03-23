import { nanoid } from "@reduxjs/toolkit";
import { AiOutlineRetweet } from "react-icons/ai";
import { TbPencilMinus } from "react-icons/tb";

import useUserControls from "../../../redux/control/userControls";
import useTweetActions from "../hooks/useTweetActions";
import { useNoti } from "../../../noti";

import BackDrop from "../../../components/ui/BackDrop";

import { TweetType } from "../../../types";

type ReTweetType = {
  tweet: TweetType;
  closeHandler: () => void;
  reTweetState: {
    state: boolean;
    reTweetId?: string;
  };
};

function ReTweetPanel(props: ReTweetType) {
  const { tweet, reTweetState, closeHandler } = props;

  const { user } = useUserControls();
  const { reTweet, undoReTweet } = useTweetActions();
  const { setNoti } = useNoti();

  const newTid = nanoid();

  const newTweet: TweetType = {
    ...tweet,
    tweet: "retweeting..",
    timespan: Date.now(),
    createBy: user.uid,
    hashtags: [],
    likes: [],
    replies: [],
    tweetType: {
      type: "retweet",
      originalTweetId: tweet.tid,
    },
    tid: newTid,
  };

  const handleReTweet = () => {
    reTweet(newTweet, tweet);
    setNoti("Retweeted");
    closeHandler();
  };

  const handleUndoReTweet = () => {
    undoReTweet(tweet);
    setNoti("Undo Retweet");
    closeHandler();
  };

  return (
    <>
      <div className="absolute -right-5 -left-5 -bottom-10 flex flex-col gap-3 p-3 rounded-md bg-app-white-1 dark:bg-app-black-1 text-inherit font-bold shadow shadow-app-gray-3 w-[170px] z-20">
        {reTweetState.state ? (
          <button
            type="button"
            onClick={handleUndoReTweet}
            className="flex items-center gap-2"
          >
            <AiOutlineRetweet />
            Undo Retweet
          </button>
        ) : (
          <button
            type="button"
            onClick={handleReTweet}
            className="flex items-center gap-2"
          >
            <AiOutlineRetweet />
            Retweet
          </button>
        )}

        <button type="button" className="flex items-center gap-2">
          <TbPencilMinus />
          Quote Tweet
        </button>
      </div>
      <BackDrop handleClose={closeHandler} />
    </>
  );
}

export default ReTweetPanel;
