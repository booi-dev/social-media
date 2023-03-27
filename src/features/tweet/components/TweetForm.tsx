import { useState, useRef } from "react";

import { BsArrowLeftShort } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

import { useNoti } from "../../../noti";

import useUserControls from "../../../redux/control/userControls";

import AppIcon from "../../../components/ui/AppIcon";
import TweetBtnPanel from "./TweetBtnPanel";
import TweetAudienceFilter from "./TweetAudienceFilter";

import findHashTags from "../../../utils/findHashTag";

import { TweetType, HashTagType } from "../../../types";

type TweetFormType = {
  newTId: string;
  submitHandler: (newTweet: TweetType) => void;
  tweetHaveType: {
    type: "normal" | "retweet" | "reply" | "mention";
    originalTweetId?: string | null;
  };
  closeHandler?: () => void;
  isLargeTextArea?: boolean;
  isFilterBtnHidden?: boolean;
  isBackBtnShow?: boolean;
  openNotification?: () => void;
};

function TweetForm(props: TweetFormType) {
  const {
    newTId,
    submitHandler,
    closeHandler,
    tweetHaveType,
    isLargeTextArea,
    isBackBtnShow,
    isFilterBtnHidden,
    openNotification,
  } = props;

  const { user } = useUserControls();

  const rawTweet: TweetType = {
    tid: newTId,
    tweet: "",
    timespan: 0,
    createBy: user.uid,
    hashtags: [],
    likes: [],
    replies: [],
    reTweets: [],
    mentions: [],
    tweetType: {
      type: tweetHaveType.type,
      originalTweetId: tweetHaveType.originalTweetId,
    },
  };

  const [newTweet, setNewTweet] = useState(rawTweet);
  const [isAudienceFilter, setIsAudienceFilter] = useState(false);
  const [hashtags, setHashtags] = useState<HashTagType[]>([]);
  const [characterCount, setCharacterCount] = useState(280);

  const { setNoti } = useNoti();

  //
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const resizeArea = () => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };

  // hash tags

  const createHashTags = (sentence: string) => {
    const tags = findHashTags(sentence);
    setHashtags(tags);
    return tags;
  };

  const resetRawTweet = () => {
    setNewTweet(rawTweet);
    setHashtags([]);
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    resizeArea();
    setCharacterCount(280 - value.length);
    const tags = createHashTags(value);
    setNewTweet({
      ...newTweet,
      timespan: Date.now(),
      hashtags: tags,
      tweet: e.target.value,
    });
    console.log(newTweet);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitHandler(newTweet);
    resetRawTweet();
    closeHandler?.();
    openNotification?.();
    setNoti("Your tweet is sent", 3, "top-center");
    console.log(newTweet);
  };

  return (
    <div className="relative">
      {isBackBtnShow && (
        <button type="button" onClick={closeHandler} className="pt-2 md:hidden">
          <AppIcon icon={BsArrowLeftShort} size={28} hoverColor="black" />
        </button>
      )}

      <form className="flex w-full gap-3 pt-0" onSubmit={handleSubmit}>
        {isAudienceFilter && (
          <TweetAudienceFilter handleClose={() => setIsAudienceFilter(false)} />
        )}

        <div className="h-14 w-14 shrink-0">
          <img
            className="h-full w-full rounded-full object-cover"
            src={user.displayPicURL}
            alt="twitter profile"
          />
        </div>
        <div className="w-full">
          {!isFilterBtnHidden && (
            <button
              type="button"
              onClick={() => setIsAudienceFilter(true)}
              className="mb-1 flex w-min items-center gap-1 rounded-full border-[1px] border-app-white-5 px-3 font-bold text-pri-clr-1 hover:bg-pri-clr-1 hover:bg-opacity-20 "
            >
              Everyone
              <FiChevronDown className="translate-y-[2px] stroke-2" />
            </button>
          )}

          <textarea
            ref={textAreaRef}
            maxLength={500}
            placeholder="What's happening"
            onChange={handleInput}
            value={newTweet.tweet}
            className={`w-full px-1 ${isLargeTextArea && "min-h-[150px]"}  ${
              isFilterBtnHidden && "pt-3"
            }  hide-scrollbar resize-none bg-inherit text-app-font-20 font-normal text-inherit focus:outline-none`}
          />
          <div className=" flex gap-2 px-2 text-pri-clr-1">
            {hashtags.map((tag) => (
              <div key={tag.tagId}>{tag.tagName}</div>
            ))}
          </div>
          <TweetBtnPanel
            tweet={newTweet}
            characterCount={characterCount}
            isLargeTextArea={isLargeTextArea}
          />
        </div>
      </form>
    </div>
  );
}

TweetForm.defaultProps = {
  closeHandler: () => console.log("close handler is not defined"),
  isLargeTextArea: false,
  isBackBtnShow: false,
  isFilterBtnHidden: false,
  openNotification: () => console.log("open notification is not defined"),
};

export default TweetForm;
