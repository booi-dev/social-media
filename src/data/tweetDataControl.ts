import useTweetControls from "../redux/control/tweetControls";

// import { TweetType } from "../types";

function useTweetDataControl() {
  const { updateTweet } = useTweetControls();

  const addNewReply = (targetTid: string, newTid: string, adderUid: string) => {
    updateTweet(targetTid, {});
  };

  return { addNewReply };
}

export default useTweetDataControl;
