import { HashTagType } from "../../types";

type NewsPropType = {
  tag: HashTagType;
};

function Trending({ tag }: NewsPropType) {
  const randomEl = (length: number) => Math.floor(Math.random() * length);
  const randomCategory = tag.category[randomEl(tag.category.length)];

  return (
    <div className="py-2 px-4 hover:bg-app-white-3">
      <h2 className="text-app-gray-3 capitalize">
        {`${randomCategory} · Trending`}
      </h2>
      <h1 className="font-bold text-app-font-17"> {`#${tag.tag}`}</h1>
      <h3 className="text-app-gray-3"> {`${tag.count} Tweets`}</h3>
    </div>
  );
}

export default Trending;
