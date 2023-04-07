import { HashTagDataType } from "../../types";

type NewsPropType = {
  tag: HashTagDataType;
};

function Trending({ tag }: NewsPropType) {
  const randomEl = (length: number) => Math.floor(Math.random() * length);
  const randomCategory = tag.tagCategory[randomEl(tag.tagCategory.length)];

  return (
    <div className="py-2 px-4 hover:bg-app-white-3 dark:hover:bg-transparent">
      <h2 className="capitalize text-app-gray-3">
        {`${randomCategory} · Trending`}
      </h2>
      <h1 className="text-app-font-17 font-bold"> {`#${tag.tagName}`}</h1>
      <h3 className="text-app-gray-3"> {`${tag.tagCount} Tweets`}</h3>
    </div>
  );
}

export default Trending;
