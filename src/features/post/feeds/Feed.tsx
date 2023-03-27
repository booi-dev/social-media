import { useState } from "react";

import { GoKebabHorizontal } from "react-icons/go";

import useUserControls from "../../../redux/control/userControls";

import PostSignature, { TweetCreatorPic } from "./PostSignature";
import PostOptions from "../components/PostOptions";
import BackDrop from "../../../components/ui/BackDrop";
import PostWithHighlightedHashTags from "./PostWithHighlightedHashTags";

import { PostType, TypeStateType } from "../../../types";

type TweetActionsType = {
  post: PostType;
  typeState: TypeStateType;
};

type TweetPropType = {
  post: PostType;
  typeState: TypeStateType;
  actionsPanel?: React.FC<TweetActionsType> | null;
  wrappedTweet?: React.ReactElement | null;
};

function Feed(props: TweetPropType) {
  const {
    post,
    typeState,
    actionsPanel: ActionsPanel,
    wrappedTweet: WrappedTweet,
  } = props;

  const { user } = useUserControls();

  const [isOption, setIsOption] = useState(false);

  return (
    <>
      <div
        key={post.pid}
        className="bg-inherited relative flex border-b-[0px] border-app-white-5 bg-inherit  px-1 pt-3 text-inherit transition-all duration-500 hover:bg-app-white-2 dark:border-app-gray-1 dark:hover:bg-transparent md:px-4"
      >
        <div className="h-12 w-12 shrink-0">
          <TweetCreatorPic tweetCreatorUid={post.createBy} />
        </div>
        <div className="flex-1 bg-inherit">
          <div className="bg flex justify-between bg-inherit px-2 text-inherit">
            <div className="flex items-center gap-1.5 text-inherit">
              <PostSignature
                tweetCreatorUid={post.createBy}
                tweetTimespan={post.timespan}
              />
            </div>
            {user.uid === post.createBy && (
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
            <PostWithHighlightedHashTags tweet={post.post} />
          </div>
          {WrappedTweet}
          {ActionsPanel && <ActionsPanel post={post} typeState={typeState} />}
        </div>

        {isOption && (
          <div className="absolute top-2 right-2 z-20 min-w-[250px] rounded-sm bg-inherit py-4 text-inherit shadow-lg dark:bg-app-black-3">
            <PostOptions post={post} />
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
