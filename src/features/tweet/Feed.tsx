import { useState, useEffect } from "react";
import { BsChat, BsSuitHeart, BsTextRight } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { RxShare2 } from "react-icons/rx";
import { TweetType } from "../../redux/slice/tweet";
import addExtraProperties, {
  EnhancedTweetType,
} from "../../utils/addExtraProperties";
import AppIcon from "../../components/AppIcon";

type TweetPropType = {
  tweet: TweetType;
};

function Feed(props: TweetPropType) {
  const { tweet } = props;

  const [enhancedTweet, setEnhancedTweet] = useState<EnhancedTweetType | null>(
    null
  );

  useEffect(() => {
    setEnhancedTweet(addExtraProperties(tweet));
    console.log(enhancedTweet);
  }, [tweet]);

  return (
    <div
      key={enhancedTweet?.id}
      className="border-x-[1px] border-b-[1px] hover:bg-app-white-2"
    >
      <div className="flex items-center px-2 brightness-150">
        <h2 className="text-app-black-1.2"> {`@${enhancedTweet?.createBy}`}</h2>
        <div className="mx-1 align-middle text-app-black-1.2">·</div>
        <h2 className="text-app-black-1.2"> {enhancedTweet?.timeElapse} </h2>
      </div>
      <h1 className="p-2">{enhancedTweet?.tweet}</h1>
      <div className="flex w-full justify-around py-2">
        {/* reple */}
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
    </div>
  );
}

export default Feed;
