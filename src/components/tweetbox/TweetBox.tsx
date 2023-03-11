import { useState, useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { BsArrowLeftShort } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import useLocalStorage from "../../hooks/useLocalStorage";
import useTweetControls from "../../redux/control/tweetControls";

import AppIcon from "../ui/AppIcon";
import TweetBtnPanel from "./TweetBtnPanel";
import TweetAudienceFilter from "./TweetAudienceFilter";

import { TweetType } from "../../types";

import findHashTags from "../../utils/findHashTag";

type TweetBoxType = {
  handleClose?: () => void;
  isLargeTextArea?: boolean;
  userPic: string;
};

function TweetBox(props: TweetBoxType) {
  const { handleClose, isLargeTextArea, userPic } = props;

  const { addData } = useLocalStorage();
  const { createTweet } = useTweetControls();

  const rawTweet: TweetType = {
    id: nanoid(),
    tweet: "",
    timespan: Date.now(),
    createBy: "booi_mangang",
    hashtags: [],
    replies: [],
    likeCount: 5,
    likeBy: [],
    retweetCount: 2,
    retweeetBy: [],
  };

  const [newTweet, setNewTweet] = useState(rawTweet);
  const [characterCount, setCharacterCount] = useState(280);
  const [hashtags, setHashtags] = useState<string[]>([]);

  const [isAudienceFilter, setIsAudienceFilter] = useState(false);

  const addDataToLocalStorage = (toBeAddData: TweetType) => {
    addData(toBeAddData);
  };

  // text area auto resizing

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const resizeArea = () => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };

  //
  const createHashTags = (sentence: string) => {
    const tags = findHashTags(sentence);
    setHashtags(tags);
    return tags;
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    resizeArea();
    setCharacterCount(280 - value.length);
    const tags = createHashTags(value);
    setNewTweet({
      ...newTweet,
      hashtags: tags,
      tweet: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewTweet(rawTweet);
    createTweet(newTweet);
    addDataToLocalStorage(newTweet);
    handleClose?.();
  };

  return (
    <div className="relative">
      {handleClose && (
        <button type="button" onClick={handleClose} className="md:hidden pt-2">
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
            src={userPic}
            alt="twitter profile"
          />
        </div>
        <div className="w-full">
          <button
            type="button"
            onClick={() => setIsAudienceFilter(true)}
            className="flex items-center gap-1 w-min px-3 mb-1 hover:bg-pri-blue-1 hover:bg-opacity-20 rounded-full text-pri-blue-1 font-bold border-[1px] border-app-white-5 "
          >
            Everyone
            <FiChevronDown className="stroke-2 translate-y-[2px]" />
          </button>
          <textarea
            ref={textAreaRef}
            maxLength={500}
            placeholder="What's happening"
            onChange={handleInput}
            value={newTweet.tweet}
            className={`w-full px-2 ${
              isLargeTextArea && "min-h-[150px] "
            } text-app-font-20 font-normal text-app-black-3 focus:outline-none resize-none hide-scrollbar`}
          />
          <div className=" flex gap-2 px-2 text-pri-blue-1">
            {hashtags.map((tag) => (
              <div key={tag}>{tag}</div>
            ))}
          </div>
          <TweetBtnPanel tweet={newTweet} characterCount={characterCount} />
        </div>
      </form>
    </div>
  );
}

TweetBox.defaultProps = {
  handleClose: undefined,
  isLargeTextArea: false,
};

export default TweetBox;
