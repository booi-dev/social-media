import { useState } from "react";
import { BsChat, BsSuitHeart, BsTextRight } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { RxShare2 } from "react-icons/rx";
import { GoKebabVertical } from "react-icons/go";
import { TweetType } from "../../redux/slice/tweet";
import addExtraProperties, {
  EnhancedTweetType,
} from "../../utils/addExtraProperties";

import AppIcon from "../../components/ui/AppIcon";
import BackDrop from "../../components/ui/BackDrop";
import FeedOptions from "./FeedOptions";

type TweetPropType = {
  tweet: TweetType;
};

function Feed(props: TweetPropType) {
  const { tweet } = props;

  const [enhancedTweet] = useState<EnhancedTweetType>(
    addExtraProperties(tweet)
  );

  const [isOption, setIsOption] = useState(false);

  return (
    <>
      <div
        key={enhancedTweet?.id}
        className="relative px-4 border-x-[1px] border-b-[1px] hover:bg-app-white-2"
      >
        <div className="flex justify-between px-2 brightness-150">
          <div className="flex">
            <h2 className="text-app-black-1.2">
              {`@${enhancedTweet?.createBy}`}
            </h2>
            <div className="mx-1 text-app-black-1.2">·</div>
            <h2 className="text-app-black-1.2">
              {" "}
              {enhancedTweet?.timeElapse}{" "}
            </h2>
          </div>

          <button type="button" className="" onClick={() => setIsOption(true)}>
            <GoKebabVertical />
          </button>
        </div>

        <h1 className="p-2">{enhancedTweet?.tweet}</h1>
        <div className="flex w-full justify-around py-2">
          {/* reply */}
          <AppIcon icon={BsChat} hoverColor="blue" />
          {/* retweet */}
          <AppIcon icon={AiOutlineRetweet} hoverColor="green" />
          {/* like */}
          <AppIcon icon={BsSuitHeart} hoverColor="pink" />
          {/* view */}
          <AppIcon icon={BsTextRight} rotateDeg={90} hoverColor="blue" />
          {/* share */}
          <AppIcon icon={RxShare2} hoverColor="blue" />
        </div>
        {isOption && (
          <div className="absolute top-0 right-0 min-w-[250px] py-4 rounded-lg  bg-white shadow-lg z-20">
            <FeedOptions tweet={enhancedTweet} />
          </div>
        )}
      </div>
      {isOption && (
        <BackDrop handleClose={() => setIsOption(false)} color="black" />
      )}
    </>
  );
}

export default Feed;
