import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import useLocalStorage from "../../hooks/useLocalStorage";
import useTweetControls from "../../redux/control/tweetControls";
import { TweetType } from "../../redux/slice/tweet";

const picUrl =
  "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

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
    <form className="mb-4 flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex gap-1">
        <img
          className="h-14 w-14 rounded-full object-cover"
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
      <div>
        <button type="submit" className="w-full bg-pri-blue-1 px-2">
          tweet
        </button>
      </div>
    </form>
  );
}

export default TweetForm;
