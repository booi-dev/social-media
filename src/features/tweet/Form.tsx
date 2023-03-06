import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { VscSmiley } from "react-icons/vsc";
import { MdOutlineBallot } from "react-icons/md";
import { ImImage } from "react-icons/im";

import useLocalStorage from "../../hooks/useLocalStorage";
import useTweetControls from "../../redux/control/tweetControls";

import AppIcon from "../../components/ui/AppIcon";
import { TweetType } from "../../redux/slice/tweet";

const picUrl =
  "https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

function TweetForm() {
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

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  };

  return (
    <form
      className="flex flex-col gap-2 my-4 px-3 border-x-[1px] "
      onSubmit={handleSubmit}
    >
      <div className="flex gap-1">
        <img
          className="h-14 w-14 rounded-full object-cover bg-red-300"
          src={picUrl}
          alt=""
        />
        <input
          className="w-full border-[0px] text-app-font-20 font-normal text-app-black-3 focus:outline-none"
          placeholder="tweet"
          onChange={handleInput}
          value={newTweet.tweet}
        />
      </div>
      <div className="flex justify-between items-center py-1 px-4">
        <div className="flex items-center">
          <AppIcon icon={ImImage} size={22} color="blue" />
          <AppIcon icon={MdOutlineBallot} size={25} color="blue" />
          <AppIcon icon={VscSmiley} size={23} color="blue" />
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
    </form>
  );
}

export default TweetForm;
