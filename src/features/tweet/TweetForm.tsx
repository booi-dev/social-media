import { useState, useRef } from "react";

import { BsArrowLeftShort } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

import AppIcon from "../../components/ui/AppIcon";
import TweetBtnPanel from "../../components/tweetbox/TweetBtnPanel";
import TweetAudienceFilter from "../../components/tweetbox/TweetAudienceFilter";

import findHashTags from "../../utils/findHashTag";

import { TweetType, UserType } from "../../types";

type TweetFormType = {
  user: UserType;
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
};

function TweetForm(props: TweetFormType) {
  const {
    user,
    newTId,
    submitHandler,
    closeHandler,
    tweetHaveType,
    isLargeTextArea,
    isBackBtnShow,
    isFilterBtnHidden,
  } = props;

  const rawTweet: TweetType = {
    tid: newTId,
    tweet: "",
    timespan: 0,
    createBy: user.uid,
    hashtags: [],
    likes: ["01", "02"],
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
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [characterCount, setCharacterCount] = useState(280);

  // text area auto resizing

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
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitHandler(newTweet);
    resetRawTweet();
    closeHandler?.();
    console.log(newTweet);
  };

  return (
    <div className="relative">
      {isBackBtnShow && (
        <button type="button" onClick={closeHandler} className="md:hidden pt-2">
          <AppIcon icon={BsArrowLeftShort} size={28} hoverColor="black" />
        </button>
      )}

      <form className="flex gap-3 w-full pt-0" onSubmit={handleSubmit}>
        {isAudienceFilter && (
          <TweetAudienceFilter handleClose={() => setIsAudienceFilter(false)} />
        )}

        <div className="shrink-0 w-14 h-14">
          <img
            className="w-full h-full rounded-full object-cover"
            src={user.displayPicURL}
            alt="twitter profile"
          />
        </div>
        <div className="w-full">
          {!isFilterBtnHidden && (
            <button
              type="button"
              onClick={() => setIsAudienceFilter(true)}
              className="flex items-center gap-1 w-min px-3 mb-1 hover:bg-pri-blue-1 hover:bg-opacity-20 rounded-full text-pri-blue-1 font-bold border-[1px] border-app-white-5 "
            >
              Everyone
              <FiChevronDown className="stroke-2 translate-y-[2px]" />
            </button>
          )}

          <textarea
            ref={textAreaRef}
            maxLength={500}
            placeholder="What's happening"
            onChange={handleInput}
            value={newTweet.tweet}
            className={`w-full px-2 ${
              isLargeTextArea && "min-h-[150px] "
            } text-app-font-20 font-normal bg-inherit text-inherit focus:outline-none resize-none hide-scrollbar`}
          />
          <div className=" flex gap-2 px-2 text-pri-blue-1">
            {hashtags.map((tag) => (
              <div key={tag}>{tag}</div>
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
  closeHandler: undefined,
  isLargeTextArea: false,
  isBackBtnShow: false,
  isFilterBtnHidden: false,
};

export default TweetForm;
