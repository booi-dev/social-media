import React from "react";

export type NewsType = {
  id: number;
  category: string;
  topic: string;
  tweetCounts: number;
};

type NewsPropType = {
  news: NewsType;
};

function News({ news }: NewsPropType) {
  return (
    <div className="py-2 px-4 hover:bg-app-white-3">
      <h2 className="text-app-gray-3"> {`${news.category} · Trending`}</h2>
      <h1 className="font-bold text-app-font-17"> {`#${news.topic}`}</h1>
      <h3 className="text-app-gray-3"> {`${news.tweetCounts}k Tweets`}</h3>
    </div>
  );
}

export default News;
