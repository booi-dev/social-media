/* eslint-disable react/no-unescaped-entities */
import useHashTagData from "../hashtag/useHashTagData";
import Trending from "./Trending";
// import { HashTagDataType } from "../../types";

function TrendingList() {
  const { useGetLatestHashTags } = useHashTagData();
  const hashtags = useGetLatestHashTags(4);

  // function sortArray(arr: HashTagDataType[], property: number | string) {
  //   return arr.sort((b, a) => {
  //     if (a[property] < b[property]) return -1;
  //     if (a[property] > b[property]) return 1;
  //     return 0;
  //   });
  // }

  // const sortedTrendingTags = sortArray(hashtags, "count");

  return (
    <div className="cursor-pointer rounded-sm bg-app-white-2 py-4 text-inherit dark:bg-app-black-3">
      <h1 className="py-2 px-4 text-app-font-20 font-bold ">
        Trending on Socia
      </h1>
      {hashtags.map((tag, idx) => (
        <Trending key={tag.tagId} tag={tag} />
      ))}
    </div>
  );
}

export default TrendingList;
