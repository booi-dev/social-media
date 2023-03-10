import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { BsArrowLeftShort } from "react-icons/bs";
import { VscSmiley } from "react-icons/vsc";
import { MdOutlineBallot } from "react-icons/md";
import { ImImage } from "react-icons/im";
import { FiChevronDown } from "react-icons/fi";

import useLocalStorage from "../../hooks/useLocalStorage";
import useTweetControls from "../../redux/control/tweetControls";

import AutoResizeTextArea from "../../components/ui/AutoResizeTextArea";
import AppIcon from "../../components/ui/AppIcon";
import { TweetType } from "../../redux/slice/tweet";

type TweetFormType = {
  handleClose?: () => void;
  userPic: string;
};

function TweetForm(props: TweetFormType) {
  const { handleClose, userPic } = props;

  const { addData } = useLocalStorage();
  const { createTweet } = useTweetControls();

  const rawTweet: TweetType = {
    id: "",
    tweet: "",
    timespan: Date.now(),
    createBy: "booi_mangang",
    replies: [],
    likeCount: 5,
    likeBy: [],
    retweetCount: 2,
    retweeetBy: [],
  };

  const [newTweet, setNewTweet] = useState(rawTweet);

  const addDataToLocalStorage = (toBeAddData: TweetType) => {
    addData(toBeAddData);
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setNewTweet({
      ...newTweet,
      id: nanoid(),
      tweet: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewTweet(rawTweet);
    // update redux store
    createTweet(newTweet);
    // update local storage
    addDataToLocalStorage(newTweet);
    // call close handler
    handleClose?.();
  };

  return (
    <form className="flex gap-4 p-4" onSubmit={handleSubmit}>
      <button type="button" onClick={handleClose} className="md:hidden w-min ">
        <AppIcon icon={BsArrowLeftShort} hoverColor="black" />
      </button>

      <div className="h-14 w-14 ">
        <img
          className="w-full rounded-full object-cover"
          src={userPic}
          alt=""
        />
      </div>
      <div className="w-full">
        <button
          type="button"
          className="flex items-center gap-1 w-min px-3 mb-1 hover:bg-pri-blue-1 hover:bg-opacity-20 rounded-full text-pri-blue-1 font-bold border-[1px] border-app-white-5 "
        >
          Everyone
          <FiChevronDown className="stroke-2 translate-y-[2px]" />
        </button>
        <AutoResizeTextArea
          maxLength={280}
          placeholder="What's happening"
          onChange={handleInput}
          value={newTweet.tweet}
        />
        <div className="flex justify-between items-center w-full py-1">
          <div className="flex items-center">
            <AppIcon icon={ImImage} size={22} color="blue" hoverColor="blue" />
            <AppIcon
              icon={MdOutlineBallot}
              size={25}
              color="blue"
              hoverColor="blue"
            />
            <AppIcon
              icon={VscSmiley}
              size={23}
              color="blue"
              hoverColor="blue"
            />
          </div>
          <div className="  [&>button]:rounded-3xl [&>button]:text-app-white-1   [&>button]:w-full  [&>button]:px-4 [&>button]:py-1 [&>button]:font-bold">
            {newTweet.tweet ? (
              <button type="submit" className="bg-pri-blue-1">
                Tweet
              </button>
            ) : (
              <button type="button" className="bg-pri-blue-1 bg-opacity-60 ">
                Tweet
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

TweetForm.defaultProps = {
  handleClose: undefined,
};

export default TweetForm;
