import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPin } from "react-icons/bs";
import useTweetControls from "../../redux/control/tweetControls";
import useLocalStorage from "../../hooks/useLocalStorage";
import { EnhancedTweetType } from "../../utils/addExtraProperties";
import WarningMsg from "../../components/ui/WarningMsg";

type FeedOptionsType = {
  tweet: EnhancedTweetType;
};

function FeedOptions({ tweet }: FeedOptionsType) {
  const { deleteTweet } = useTweetControls();
  const { deleteData } = useLocalStorage();

  const [isWarning, setIsWarning] = useState(false);

  const handleDelete = () => {
    deleteTweet(tweet.tid);
    deleteData(tweet.tid);
  };

  return (
    <>
      <div className="text-app-font-17 font-bold text-inherit">
        <button
          type="button"
          className="flex items-center gap-2 w-full p-3 text-left text-red-500 hover:bg-app-white-2 dark:hover:bg-app-gray-1"
          onClick={() => setIsWarning(true)}
        >
          <RiDeleteBinLine />
          Delete
        </button>

        <button
          type="button"
          className="flex items-center gap-2 w-full p-3 text-left text-inherit hover:bg-app-white-2 dark:hover:bg-app-gray-1"
        >
          <BsPin />
          Pin to your profile
        </button>
      </div>
      {isWarning && (
        <div className="bg-inherit text-inherit">
          <WarningMsg
            warningText="Delete Tweet?"
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

export default FeedOptions;
