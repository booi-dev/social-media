import { useState, useEffect } from "react";
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

  const [enhancedTweet, setEnhancedTweet] = useState<EnhancedTweetType | null>(
    null
  );

  const [isOption, setIsOption] = useState(false);

  useEffect(() => {
    setEnhancedTweet(addExtraProperties(tweet));
  }, [tweet]);

  return (
    <>
      <div
        key={enhancedTweet?.id}
        className="relative border-x-[1px] border-b-[1px] hover:bg-app-white-2"
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
          <AppIcon icon={BsChat} color="blue" />
          {/* retweet */}
          <AppIcon icon={AiOutlineRetweet} color="green" />
          {/* like */}
          <AppIcon icon={BsSuitHeart} color="pink" />
          {/* view */}
          <AppIcon icon={BsTextRight} rotateDeg={90} color="blue" />
          {/* share */}
          <AppIcon icon={RxShare2} color="blue" />
        </div>
        {isOption && (
          <div className="absolute top-0 right-0 min-w-[250px] py-4 rounded-lg  bg-white shadow-lg z-20">
            <FeedOptions />
          </div>
        )}
      </div>
      {isOption && <BackDrop handleClose={() => setIsOption(false)} />}
    </>
  );
}

export default Feed;
