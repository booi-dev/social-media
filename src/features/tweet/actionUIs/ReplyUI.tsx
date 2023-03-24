import { useState } from "react";
import { BsChat, BsChatFill } from "react-icons/bs";

import AppIcon from "../../../components/ui/AppIcon";
import BackDrop from "../../../components/ui/BackDrop";

import useUserControls from "../../../redux/control/userControls";
import useGetProperties from "../../../hooks/useGetProperties";

import TweetReplyForm from "../actions/TweetReplyForm";
import LogInModal from "../../../components/ui/LogInModal";

import { TweetType } from "../../../types";

function ReplyUI(props: { tweet: TweetType }) {
  const { tweet } = props;

  const { isAuthenticate } = useUserControls();
  const { getTweetCreator } = useGetProperties();
  const [IsModalShow, setIsModalShow] = useState(false);

  const [isReplyBtnClick, setIsReplyBtnClick] = useState(false);

  const handleBtnClick = () => {
    if (isAuthenticate) setIsReplyBtnClick(true);
    else {
      setIsModalShow(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleBtnClick}
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
      {IsModalShow && (
        <LogInModal
          iconDetail={{ icon: BsChatFill, color: "blue" }}
          title="Reply to join the conversation."
          text={`Once you join Twitter, you can respond to ${getTweetCreator(
            tweet.createBy
          )?.displayName.toUpperCase()}'s Tweet.`}
          closeHandler={() => setIsModalShow(false)}
        />
      )}
    </>
  );
}

export default ReplyUI;
