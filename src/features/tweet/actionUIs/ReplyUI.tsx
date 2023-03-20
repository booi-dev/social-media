import { useState } from "react";
import { BsChat } from "react-icons/bs";

import AppIcon from "../../../components/ui/AppIcon";
import BackDrop from "../../../components/ui/BackDrop";

import { TweetType } from "../../../types";

import TweetReplyForm from "../actions/TweetReplyForm";

function ReplyUI(props: { tweet: TweetType }) {
  const { tweet } = props;

  const [isReplyBtnClick, setIsReplyBtnClick] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsReplyBtnClick(true)}
        className="flex items-center"
      >
        <AppIcon
          icon={BsChat}
          hoverColor="blue"
          text={tweet.replies.length > 0 ? tweet.replies.length : "0"}
        />
      </button>
      {isReplyBtnClick && (
        <>
          <div className="fixed inset-0 h-screen min-w-[480px] sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[500px]  sm:h-min z-20">
            <TweetReplyForm
              originalTweet={tweet}
              closeHandler={() => setIsReplyBtnClick(false)}
            />
          </div>
          <BackDrop
            handleClose={() => setIsReplyBtnClick(false)}
            color="white"
          />
        </>
      )}
    </>
  );
}

export default ReplyUI;
