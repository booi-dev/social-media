import { nanoid } from "@reduxjs/toolkit";

import { IoMdClose } from "react-icons/io";

import useUserControls from "../../redux/control/userControls";

import useTweetActions from "./useTweetActions";
import useGetProperties from "../../hooks/useGetProperties";

import AppIcon from "../../components/ui/AppIcon";
import TweetSignature, { TweetCreatorPic } from "../tweet/TweetSignature";
import TweetForm from "../tweet/TweetForm";

import { TweetType } from "../../types";

type TweetReplyFormType = {
  originalTweet: TweetType;
  closeHandler: () => void;
};

function TweetReplyForm(props: TweetReplyFormType) {
  const { closeHandler, originalTweet } = props;

  const { user } = useUserControls();
  const { createNewTweet, addNewReply } = useTweetActions();

  const { getTweetCreator } = useGetProperties();
  const originalTweetCreator = getTweetCreator(originalTweet.createBy);

  const newTId = nanoid();

  const handleSubmit = (newTweet: TweetType) => {
    createNewTweet(newTweet);
    addNewReply(originalTweet);
  };

  return (
    <div className="relative w-screen sm:w-full h-full bg-app-white-1 shadow shadow-app-gray-3 dark:bg-app-black-1  rounded-xl z-20">
      <button type="button" onClick={closeHandler}>
        <AppIcon icon={IoMdClose} size={26} hoverColor="blue" />
      </button>

      <div className="flex flex-col px-4 ">
        <div className="flex gap-4 ">
          <div className="w-14 h-14 shrink-0">
            <TweetCreatorPic tweetCreatorUid={originalTweet.createBy} />
          </div>
          <div className="flex items-center gap-1.5 text-inherit">
            <TweetSignature
              tweetCreatorUid={originalTweet.createBy}
              tweetTimespan={originalTweet.timespan}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex justify-center w-12">
            <div className="w-[1px] h-full bg-app-white-3 dark:bg-app-gray-3" />
          </div>
          <div>{originalTweet.tweet}</div>
        </div>
        <div className="flex gap-4">
          <div className="flex justify-center w-12">
            <div className="w-[1px] h-full bg-app-white-3 dark:bg-app-gray-3" />
          </div>
          <h1 className=" py-3 text-app-gray-3">
            Replying to
            <span className="text-pri-blue-1">
              @{originalTweetCreator?.userName}
            </span>
          </h1>
        </div>
      </div>

      <div className="py-2 px-4 ">
        <TweetForm
          user={user}
          newTId={newTId}
          submitHandler={handleSubmit}
          closeHandler={closeHandler}
          tweetHaveType={{
            type: "reply",
            originalTweetId: originalTweet.tid,
          }}
          isLargeTextArea
          isFilterBtnHidden
        />
      </div>
    </div>
  );
}

export default TweetReplyForm;
