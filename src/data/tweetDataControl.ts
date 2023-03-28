import useTweetControls from "../redux/control/postControls";

// import { TweetType } from "../types";

function useTweetDataControl() {
  const { updateTweet } = useTweetControls();

  const addNewReply = (targetTid: string, newTid: string, adderUid: string) => {
    updateTweet(targetTid, {});
  };

  return { addNewReply };
}

export default useTweetDataControl;
