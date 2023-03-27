import { nanoid } from "@reduxjs/toolkit";
import { AiOutlineRetweet } from "react-icons/ai";
import { TbPencilMinus } from "react-icons/tb";

import useUserControls from "../../../redux/control/userControls";
import useTweetActions from "../hooks/useTweetActions";
import { useNoti } from "../../../noti";

import BackDrop from "../../../components/ui/BackDrop";

import { PostType } from "../../../types";

type RePostPanelType = {
  tweet: PostType;
  closeHandler: () => void;
  reTweetState: {
    state: boolean;
    reTweetId?: string;
  };
};

function RePostPanel(props: RePostPanelType) {
  const { tweet, reTweetState, closeHandler } = props;

  const { user } = useUserControls();
  const { reTweet, undoReTweet } = useTweetActions();
  const { setNoti } = useNoti();

  const newTid = nanoid();

  const newTweet: PostType = {
    ...tweet,
    post: "reposting..",
    timespan: Date.now(),
    createBy: user.uid,
    hashtags: [],
    likes: [],
    replies: [],
    postType: {
      type: "repost",
      originalTweetId: tweet.pid,
    },
    pid: newTid,
  };

  const handleReTweet = () => {
    reTweet(newTweet, tweet);
    setNoti("Post sent");
    closeHandler();
  };

  const handleUndoReTweet = () => {
    undoReTweet(tweet);
    setNoti("Post undo");
    closeHandler();
  };

  return (
    <>
      <div className="absolute -right-5 -left-5 -bottom-10 z-20 flex w-[170px] flex-col gap-3 rounded-sm bg-app-white-1 p-3 font-bold text-inherit shadow shadow-app-gray-3 dark:bg-app-black-1">
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

export default RePostPanel;
