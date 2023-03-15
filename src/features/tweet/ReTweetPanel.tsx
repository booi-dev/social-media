import { nanoid } from "@reduxjs/toolkit";
import { AiOutlineRetweet } from "react-icons/ai";
import { TbPencilMinus } from "react-icons/tb";

import useUserControls from "../../redux/control/userControls";
import useTweetControls from "../../redux/control/tweetControls";
import useLocalStorage from "../../hooks/useLocalStorage";

import BackDrop from "../../components/ui/BackDrop";
import { TweetType } from "../../types";

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
  const { addData, updateData, deleteData } = useLocalStorage();
  const { createTweet, deleteTweet, updateTweet } = useTweetControls();

  const newTid = nanoid();

  const newTweet: TweetType = {
    ...tweet,
    timespan: Date.now(),
    createBy: user.uid,
    hashtags: [],
    likes: [],
    replies: [],
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
    // update retweetby - add user id to the array - Redux Store
    updateTweet(tweet.tid, {
      reTweets: [...tweet.reTweets, { byUid: user.uid, reTweetTid: newTid }],
    });
    // update retweetby - add user id to the array - Local Store
    updateData(tweet.tid, {
      reTweets: [...tweet.reTweets, { byUid: user.uid, reTweetTid: newTid }],
    });
    // close panel
    closeHandler();
  };

  const handleUndoReTweet = () => {
    console.log("undoing retweet", reTweetState.reTweetId);

    // DELETE the retweeted tweet - redux store & LS
    tweet.reTweets.forEach((retweet) => {
      if (retweet.byUid === user.uid) {
        deleteTweet(retweet.reTweetTid);
        deleteData(retweet.reTweetTid);
      }
    });

    // UPDATE reTweets - remove user-id from retweetby array
    updateTweet(tweet.tid, {
      reTweets: [
        ...tweet.reTweets.filter((retweet) => retweet.byUid !== user.uid),
      ],
    });

    // UPDATE reTweets - remove user-id from retweetby array
    updateData(tweet.tid, {
      reTweets: [
        ...tweet.reTweets.filter((retweet) => retweet.byUid !== user.uid),
      ],
    });
    // close panel
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
