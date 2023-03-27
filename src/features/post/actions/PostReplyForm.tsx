import { nanoid } from "@reduxjs/toolkit";

import { IoMdClose } from "react-icons/io";

import useTweetActions from "../hooks/useTweetActions";
import useGetProperties from "../../../hooks/useGetProperties";

import AppIcon from "../../../components/ui/AppIcon";
import TweetSignature, { TweetCreatorPic } from "../feeds/TweetSignature";
import TweetForm from "../components/PostForm";

import { TweetType } from "../../../types";

type PostReplyFormType = {
  originalTweet: TweetType;
  closeHandler: () => void;
};

function PostReplyForm(props: PostReplyFormType) {
  const { closeHandler, originalTweet } = props;

  const { createNewTweet, addNewReply } = useTweetActions();

  const { getTweetCreator } = useGetProperties();
  const originalTweetCreator = getTweetCreator(originalTweet.createBy);

  const newTId = nanoid();

  const handleSubmit = (newTweet: TweetType) => {
    createNewTweet(newTweet);
    addNewReply(originalTweet, newTId);
  };

  return (
    <div className="relative z-20 h-full w-screen rounded-sm bg-app-white-1 shadow shadow-app-gray-3  dark:bg-app-black-1 sm:w-full">
      <button type="button" onClick={closeHandler}>
        <AppIcon icon={IoMdClose} size={26} hoverColor="pri" />
      </button>

      <div className="flex flex-col px-4 ">
        <div className="flex gap-4 ">
          <div className="h-14 w-14 shrink-0">
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
          <div className="flex w-12 justify-center">
            <div className="h-full w-[1px] bg-app-white-3 dark:bg-app-gray-3" />
          </div>
          <div>{originalTweet.tweet}</div>
        </div>
        <div className="flex gap-4">
          <div className="flex w-12 justify-center">
            <div className="h-full w-[1px] bg-app-white-3 dark:bg-app-gray-3" />
          </div>
          <h1 className=" py-3 text-app-gray-3">
            Replying to
            <span className="text-pri-clr-1">
              @{originalTweetCreator?.userName}
            </span>
          </h1>
        </div>
      </div>

      <div className="py-2 px-4 ">
        <TweetForm
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

export default PostReplyForm;
