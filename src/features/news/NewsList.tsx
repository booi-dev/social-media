/* eslint-disable react/no-unescaped-entities */
import React from "react";
import News from "./News";

export type NewsType = {
  id: number;
  category: string;
  topic: string;
  tweetCounts: number;
};

// suppose to be pull from the data use liked
const fakeNewsData: NewsType[] = [
  {
    id: 0,
    category: "Gaming",
    topic: "Dota",
    tweetCounts: 12,
  },
  {
    id: 1,
    category: "Entertainment",
    topic: "Movies",
    tweetCounts: 20,
  },
  {
    id: 2,
    category: "Technology",
    topic: "Apple",
    tweetCounts: 24,
  },
  {
    id: 3,
    category: "Webdev",
    topic: "React.js",
    tweetCounts: 12,
  },
];

function NewsList() {
  return (
    <div className="py-4 bg-app-white-2 rounded-2xl cursor-pointer">
      <h1 className="py-2 px-4 text-app-font-20 font-bold  ">
        What's happening
      </h1>
      {fakeNewsData.map((news) => (
        <News key={news.id} news={news} />
      ))}
    </div>
  );
}

export default NewsList;
