/* eslint-disable react/no-unescaped-entities */
import hashtagData from "../../data/hashtagData";
import Trending from "./Trending";
import { HashTagType } from "../../types";

function TrendingList() {
  const trendingTags = hashtagData();

  function sortArray(arr: HashTagType[], property: number | string) {
    return arr.sort((b, a) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
  }

  const sortedTrendingTags = sortArray(trendingTags, "count");

  return (
    <div className="cursor-pointer rounded-sm bg-app-white-2 py-4 text-inherit dark:bg-app-black-3">
      <h1 className="py-2 px-4 text-app-font-20 font-bold ">
        What's happening
      </h1>
      {sortedTrendingTags.slice(0, 4).map((tag) => (
        <Trending key={tag.tagId} tag={tag} />
      ))}
    </div>
  );
}

export default TrendingList;
