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
  closeHandler: () => void;
};

function ReTweet(props: ReTweetType) {
  const { tweet, closeHandler } = props;

  const { user } = useUserControls();
  const { addData } = useLocalStorage();
  const { createTweet } = useTweetControls();

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
    tid: nanoid(),
  };

  const handleReTweet = () => {
    addData(newTweet);
    createTweet(newTweet);
    closeHandler();
  };

  return (
    <>
      <div className="absolute -right-5 -left-5 -bottom-10 flex flex-col gap-3 p-3 rounded-md bg-inherit dark:bg-app-black-1 text-inherit shadow shadow-app-gray-3 w-[150px] z-20">
        <button
          type="button"
          onClick={handleReTweet}
          className="flex items-center gap-2"
        >
          <AiOutlineRetweet />
          Retweet
        </button>
        <button type="button" className="flex items-center gap-2">
          <TbPencilMinus />
          Quote Tweet{" "}
        </button>
      </div>
      <BackDrop handleClose={closeHandler} />
    </>
  );
}

export default ReTweet;
