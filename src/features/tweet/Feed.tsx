import { useState } from "react";

import { GoKebabVertical } from "react-icons/go";

// import useGetProperties from "../../hooks/useGetProperties";

import TweetSignature, { TweetCreatorPic } from "./TweetSignature";
import TweetOptions from "./TweetOptions";
import TweetActions from "../tweetActions/TweetActions";
import BackDrop from "../../components/ui/BackDrop";
// import VerificationBadge from "../../components/ui/VerificationBadge";
import TweetWithHighlightedHashTags from "./TweetWithHighlightedHashTags";

import { TweetType, TypeStateType } from "../../types";

type TweetPropType = {
  tweet: TweetType;
  // typeState: TypeStateType;
};

function Feed(props: TweetPropType) {
  //
  const { tweet } = props;
  const [isOption, setIsOption] = useState(false);

  return (
    <>
      <div
        key={tweet.tid}
        className="relative flex px-1 pt-3 bg-inherit text-inherit  hover:bg-app-white-2  dark:hover:bg-transparent md:px-4 bg-inherited "
      >
        <div className="w-12 h-12 shrink-0">
          <TweetCreatorPic tweetCreatorUid={tweet.createBy} />
        </div>
        <div className="flex-1 bg-inherit">
          <div className="flex justify-between px-2 bg-inherit text-inherit bg">
            <div className="flex items-center gap-1.5 text-inherit">
              <TweetSignature
                tweetCreatorUid={tweet.createBy}
                tweetTimespan={tweet.timespan}
              />
            </div>
            <button
              type="button"
              className=""
              onClick={() => setIsOption(true)}
            >
              <GoKebabVertical />
            </button>
          </div>
          <div className="p-2">
            <TweetWithHighlightedHashTags tweet={tweet.tweet} />
          </div>
          {/* <TweetActions tweet={tweet} typeState={typeState} /> */}
        </div>

        {isOption && (
          <div className="absolute top-2 right-2 min-w-[250px] py-4 rounded-lg text-inherit bg-inherit dark:bg-app-black-3 shadow-lg z-20">
            <TweetOptions tweet={tweet} />
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
