import { useState } from "react";

import { GoKebabHorizontal } from "react-icons/go";

import useUserControls from "../../../redux/control/userControls";

import TweetSignature, { TweetCreatorPic } from "./TweetSignature";
import TweetOptions from "../components/TweetOptions";
import BackDrop from "../../../components/ui/BackDrop";
import TweetWithHighlightedHashTags from "./TweetWithHighlightedHashTags";

import { TweetType, TypeStateType } from "../../../types";

type TweetActionsType = {
  tweet: TweetType;
  typeState: TypeStateType;
};

type TweetPropType = {
  tweet: TweetType;
  typeState: TypeStateType;
  actionsPanel?: React.FC<TweetActionsType> | null;
  wrappedTweet?: React.ReactElement | null;
};

function Feed(props: TweetPropType) {
  const {
    tweet,
    typeState,
    actionsPanel: ActionsPanel,
    wrappedTweet: WrappedTweet,
  } = props;

  const { user } = useUserControls();

  const [isOption, setIsOption] = useState(false);

  return (
    <>
      <div
        key={tweet.tid}
        className="bg-inherited relative flex border-b-[0px] border-app-white-5 bg-inherit  px-1 pt-3 text-inherit transition-all duration-500 hover:bg-app-white-2 dark:border-app-gray-1 dark:hover:bg-transparent md:px-4"
      >
        <div className="h-12 w-12 shrink-0">
          <TweetCreatorPic tweetCreatorUid={tweet.createBy} />
        </div>
        <div className="flex-1 bg-inherit">
          <div className="bg flex justify-between bg-inherit px-2 text-inherit">
            <div className="flex items-center gap-1.5 text-inherit">
              <TweetSignature
                tweetCreatorUid={tweet.createBy}
                tweetTimespan={tweet.timespan}
              />
            </div>
            {user.uid === tweet.createBy && (
              <button
                type="button"
                className=""
                onClick={() => setIsOption(true)}
              >
                <GoKebabHorizontal />
              </button>
            )}
          </div>
          <div className="p-2">
            <TweetWithHighlightedHashTags tweet={tweet.tweet} />
          </div>
          {WrappedTweet}
          {ActionsPanel && <ActionsPanel tweet={tweet} typeState={typeState} />}
        </div>

        {isOption && (
          <div className="absolute top-2 right-2 z-20 min-w-[250px] rounded-sm bg-inherit py-4 text-inherit shadow-lg dark:bg-app-black-3">
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

Feed.defaultProps = {
  actionsPanel: null,
  wrappedTweet: null,
};

export default Feed;
