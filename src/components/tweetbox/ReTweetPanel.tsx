import { nanoid } from "@reduxjs/toolkit";
import { AiOutlineRetweet } from "react-icons/ai";
import { TbPencilMinus } from "react-icons/tb";

import useUserControls from "../../redux/control/userControls";
import useTweetControls from "../../redux/control/tweetControls";
import useLocalStorage from "../../hooks/useLocalStorage";

import BackDrop from "../ui/BackDrop";
import { TweetType } from "../../types";

type ReTweetType = {
  tweet: TweetType;
  hasReTweeted: boolean;
  closeHandler: () => void;
};

function ReTweet(props: ReTweetType) {
  const { tweet, hasReTweeted, closeHandler } = props;

  const { user } = useUserControls();
  const { addData, updateData } = useLocalStorage();
  const { createTweet } = useTweetControls();

  const newTid = nanoid();

  const newTweet: TweetType = {
    ...tweet,
    timespan: Date.now(),
    createBy: user.uid,
    hashtags: [],
    replyBy: [],
    likeBy: [],
    tweetKind: {
      kind: "retweet",
      referenceTid: tweet.tid,
    },
    tid: newTid,
  };

  const handleReTweet = () => {
    // create new tweet - redux store
    createTweet(newTweet);
    // add new data to local storate
    addData(newTweet);
    // update the retweet count of the original array
    updateData(tweet.tid, { retweeetBy: [...tweet.retweeetBy, newTid] });
    closeHandler();
  };

  return (
    <>
      <div className="absolute -right-5 -left-5 -bottom-10 flex flex-col gap-3 p-3 rounded-md bg-inherit dark:bg-app-black-1 text-inherit font-bold shadow shadow-app-gray-3 w-[170px] z-20">
        {hasReTweeted ? (
          <button
            type="button"
            onClick={handleReTweet}
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

export default ReTweet;
