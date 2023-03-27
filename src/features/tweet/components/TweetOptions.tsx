import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPin } from "react-icons/bs";

import useTweetControls from "../../../redux/control/tweetControls";
import useLocalStorage from "../../../hooks/useLocalStorage";

import WarningMsg from "../../../components/ui/WarningMsg";
import { useNoti } from "../../../noti";

import { TweetType } from "../../../types";

type FeedOptionsType = {
  tweet: TweetType;
};

function TweetOptions({ tweet }: FeedOptionsType) {
  //
  const { deleteTweet } = useTweetControls();
  const { deleteData } = useLocalStorage();
  const { setNoti } = useNoti();

  const [isWarning, setIsWarning] = useState(false);

  const deleteReTweets = () => {
    tweet.reTweets.forEach((retweeets) => {
      deleteTweet(retweeets.tweetId);
      deleteData(retweeets.tweetId);
    });
  };

  //
  const handleDelete = () => {
    deleteReTweets();
    deleteTweet(tweet.tid);
    deleteData(tweet.tid);
    setNoti("Your post is deleleted", 3, "top-center");
  };

  return (
    <>
      <div className="text-app-font-17 font-bold text-inherit">
        <button
          type="button"
          className="flex w-full items-center gap-2 p-3 text-left text-red-500 hover:bg-app-white-2 dark:hover:bg-app-gray-1"
          onClick={() => setIsWarning(true)}
        >
          <RiDeleteBinLine />
          Delete
        </button>

        <button
          type="button"
          className="flex w-full items-center gap-2 p-3 text-left text-inherit hover:bg-app-white-2 dark:hover:bg-app-gray-1"
        >
          <BsPin />
          Pin to your profile
        </button>
      </div>
      {isWarning && (
        <div className="bg-inherit text-inherit">
          <WarningMsg
            warningText="Delete Post?"
            warningDesc="This cant be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Twitter search results."
            warningBtn="Delete"
            handleConfirm={handleDelete}
            handleWarningClose={() => setIsWarning(false)}
          />
        </div>
      )}
    </>
  );
}

export default TweetOptions;
