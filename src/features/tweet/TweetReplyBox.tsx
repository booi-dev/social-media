import React from "react";
import { IoMdClose } from "react-icons/io";

import AppIcon from "../../components/ui/AppIcon";
import TweetBox from "../../components/tweetbox/TweetBox";

import useUserControls from "../../redux/control/userControls";
import useGetProperties from "../../hooks/useGetProperties";

import TweetSignature, { TweetCreatorPic } from "./TweetSignature";

import { TweetType } from "../../types";

type OriginalTweetType = {
  tweet: TweetType;
};

function OriginalTweet({ tweet }: OriginalTweetType) {
  const { getTweetCreator } = useGetProperties();
  const tweetCreator = getTweetCreator(tweet.createBy);
  return (
    <div className="flex flex-col px-4 ">
      <div className="flex gap-4 ">
        <div className="w-14 h-14 shrink-0">
          <TweetCreatorPic tweetCreatorUid={tweet.createBy} />
        </div>
        <div className="flex items-center gap-1.5 text-inherit">
          <TweetSignature
            tweetCreatorUid={tweet.createBy}
            tweetTimespan={tweet.timespan}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex justify-center w-12">
          <div className="w-[1px] h-full bg-app-white-3 dark:bg-app-gray-3" />
        </div>
        <div>{tweet.tweet}</div>
      </div>
      <div className="flex gap-4">
        <div className="flex justify-center w-12">
          <div className="w-[1px] h-full bg-app-white-3 dark:bg-app-gray-3" />
        </div>
        <h1 className=" py-3 text-app-gray-3">
          Replying to
          <span className="text-pri-blue-1"> @{tweetCreator?.userName}</span>
        </h1>
      </div>
    </div>
  );
}

type ReplyTweetBoxType = {
  tweet: TweetType;
  closeHandler: () => void;
};

function TweetReplyBox(props: ReplyTweetBoxType) {
  const { closeHandler, tweet } = props;

  const { user } = useUserControls();

  return (
    <div className="relative w-screen sm:w-full h-full bg-app-white-1 shadow shadow-app-gray-3 dark:bg-app-black-1  rounded-xl z-20">
      <button type="button" onClick={closeHandler}>
        <AppIcon icon={IoMdClose} size={26} hoverColor="blue" />
      </button>
      <OriginalTweet tweet={tweet} />
      <div className="py-2 px-4 ">
        <TweetBox
          handleClose={closeHandler}
          isLargeTextArea
          isFilterBtnHidden
          isTweetHaveType={{
            state: true,
            actionerUid: user.uid,
            type: "reply",
            originalTweetId: tweet.tid,
          }}
        />
      </div>
    </div>
  );
}

export default TweetReplyBox;
