import { useState, useRef } from "react";

import { BsArrowLeftShort } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

import { useNoti } from "../../../noti";

import useUserControls from "../../../redux/control/userControls";

import AppIcon from "../../../components/ui/AppIcon";
import PostBtnPanel from "./PostBtnPanel";
import PostAudienceFilter from "./PostAudienceFilter";

import findHashTags from "../../../utils/findHashTag";

import { PostType, HashTagType } from "../../../types";

type PostFormType = {
  newPId: string;
  submitHandler: (newPost: PostType) => void;
  postHaveType: {
    type: "normal" | "repost" | "reply" | "mention";
    originalPostId?: string | null;
  };
  closeHandler?: () => void;
  isLargeTextArea?: boolean;
  isFilterBtnHidden?: boolean;
  isBackBtnShow?: boolean;
  openNotification?: () => void;
};

function PostForm(props: PostFormType) {
  const {
    newPId,
    submitHandler,
    closeHandler,
    postHaveType,
    isLargeTextArea,
    isBackBtnShow,
    isFilterBtnHidden,
    openNotification,
  } = props;

  const { user } = useUserControls();

  const rawPost: PostType = {
    pid: newPId,
    post: "",
    timespan: 0,
    createBy: "1",
    hashtags: [],
    likes: [],
    replies: [],
    reposts: [],
    mentions: [],
    postType: {
      type: postHaveType.type,
      originalPostId: postHaveType.originalPostId,
    },
  };

  const [newPost, setNewPost] = useState(rawPost);
  const [isAudienceFilter, setIsAudienceFilter] = useState(false);
  const [hashtags, setHashtags] = useState<HashTagType[]>([]);
  const [characterCount, setCharacterCount] = useState(280);

  const { setNoti } = useNoti();

  //
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const resizeArea = () => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };

  // hash tags

  const createHashTags = (sentence: string) => {
    const tags = findHashTags(sentence);
    setHashtags(tags);
    return tags;
  };

  const resetRawPost = () => {
    setNewPost(rawPost);
    setHashtags([]);
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    resizeArea();
    setCharacterCount(280 - value.length);
    const tags = createHashTags(value);
    setNewPost({
      ...newPost,
      createBy: user.uid,
      timespan: Date.now(),
      hashtags: tags,
      post: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitHandler(newPost);
    resetRawPost();
    closeHandler?.();
    openNotification?.();
    setNoti("Your post is sent", 3, "top-center");
    console.log(newPost);
  };

  return (
    <div className="relative">
      {isBackBtnShow && (
        <button type="button" onClick={closeHandler} className="m-1 sm:hidden">
          <AppIcon icon={BsArrowLeftShort} size={28} hoverColor="pri" />
        </button>
      )}

      <form className="flex w-full gap-3 pt-0" onSubmit={handleSubmit}>
        {isAudienceFilter && (
          <PostAudienceFilter handleClose={() => setIsAudienceFilter(false)} />
        )}

        <div className="h-14 w-14 shrink-0">
          <img
            className="h-full w-full rounded-md object-cover"
            src={user.displayPicURL}
            alt="twitter profile"
          />
        </div>
        <div className="w-full">
          {!isFilterBtnHidden && (
            <button
              type="button"
              onClick={() => setIsAudienceFilter(true)}
              className="mb-1 flex w-min items-center gap-1 rounded-sm border border-app-gray-2 px-3 font-bold text-pri-clr-1 hover:bg-pri-clr-1 hover:bg-opacity-20 "
            >
              Everyone
              <FiChevronDown className="translate-y-[2px] stroke-2" />
            </button>
          )}

          <textarea
            ref={textAreaRef}
            maxLength={500}
            placeholder="What's happening"
            onChange={handleInput}
            value={newPost.post}
            className={`w-full px-1 ${isLargeTextArea && "min-h-[150px]"}  ${
              isFilterBtnHidden && "pt-3"
            }  hide-scrollbar resize-none bg-inherit text-app-font-20 font-normal text-inherit focus:outline-none`}
          />
          <div className=" flex gap-2 px-2 text-pri-clr-1">
            {hashtags.map((tag) => (
              <div key={tag.tagId}>{tag.tagName}</div>
            ))}
          </div>
          <PostBtnPanel
            post={newPost}
            characterCount={characterCount}
            isLargeTextArea={isLargeTextArea}
          />
        </div>
      </form>
    </div>
  );
}

PostForm.defaultProps = {
  closeHandler: () => console.log("close handler is not defined"),
  isLargeTextArea: false,
  isBackBtnShow: false,
  isFilterBtnHidden: false,
  openNotification: () => console.log("open notification is not defined"),
};

export default PostForm;
