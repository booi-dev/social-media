import { nanoid } from "@reduxjs/toolkit";

import useTweetActions from "../hooks/useTweetActions";

import PostForm from "../components/PostForm";

type NewPostFormType = {
  closeHandler?: () => void;
  isLargeTextArea?: boolean;
  isFilterBtnHidden?: boolean;
  isBackBtnShow?: boolean;
};

function NewPostForm(props: NewPostFormType) {
  const { closeHandler, isLargeTextArea, isBackBtnShow, isFilterBtnHidden } =
    props;

  const { createNewTweet } = useTweetActions();

  return (
    <PostForm
      newTId={nanoid()}
      submitHandler={createNewTweet}
      tweetHaveType={{ type: "normal" }}
      closeHandler={closeHandler}
      isLargeTextArea={isLargeTextArea}
      isBackBtnShow={isBackBtnShow}
      isFilterBtnHidden={isFilterBtnHidden}
    />
  );
}

NewPostForm.defaultProps = {
  closeHandler: undefined,
  isLargeTextArea: false,
  isBackBtnShow: false,
  isFilterBtnHidden: false,
};

export default NewPostForm;
