import { useState, useRef, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { useNoti } from "../../../noti";
import useUserControls from "../../../redux/control/userControls";

import { LeftArrowIcon, ChevronDownIcon } from "../../../components/icons";
import { AppIcon } from "../../../components/UI";

import PostBtnPanel from "./PostBtnPanel";
import PostAudienceFilter from "./PostAudienceFilter";

import findHashTags from "../../hashtag/findHashTag";
import useHashTags from "../../hashtag/useHashTags";

import { PostType, HashTagType, PostTypeType } from "../../../types";

type PostFormType = {
  submitHandler: (newPost: PostType) => void;
  postHaveType: PostTypeType;
  closeHandler?: () => void;
  isLargeTextArea?: boolean;
  isFilterBtnHidden?: boolean;
  isBackBtnShow?: boolean;
};

function PostForm(props: PostFormType) {
  const {
    submitHandler,
    closeHandler,
    postHaveType,
    isLargeTextArea,
    isBackBtnShow,
    isFilterBtnHidden,
  } = props;

  const { user } = useUserControls();

  const rawPost: PostType = {
    pid: "",
    post: "",
    timespan: 0,
    createBy: "1",
    createAt: new Date(),
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
  const { createHashTag } = useHashTags();

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
      pid: nanoid(),
      createBy: user.uid,
      createAt: new Date(),
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
    setNoti("Your post is sent", 3, "top-center");
    // createHashTag("my");
  };

  useEffect(() => {
    if (postHaveType.type === "reply" || isLargeTextArea)
      textAreaRef.current?.focus();
  }, []);

  return (
    <div className="relative">
      {isBackBtnShow && (
        <button type="button" onClick={closeHandler} className="m-1 sm:hidden">
          <AppIcon icon={LeftArrowIcon} size={28} hoverColor="pri" />
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
              <ChevronDownIcon className="translate-y-[2px] stroke-2" />
            </button>
          )}

          <textarea
            ref={textAreaRef}
            maxLength={500}
            placeholder={`${
              postHaveType.type === "reply" ? "" : "What's happening "
            }`}
            onChange={handleInput}
            value={newPost.post}
            className={`w-full px-1 ${isLargeTextArea && "min-h-[150px]"}  ${
              isFilterBtnHidden && "pt-3"
            }  hide-scrollbar resize-none bg-inherit text-app-font-20 font-normal text-inherit caret-pri-clr-1 focus:outline-none`}
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
};

export default PostForm;
