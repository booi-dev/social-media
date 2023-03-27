import { nanoid } from "@reduxjs/toolkit";

import useTweetActions from "../hooks/useTweetActions";

import TweetForm from "../components/PostForm";

type NewTweetFormType = {
  closeHandler?: () => void;
  isLargeTextArea?: boolean;
  isFilterBtnHidden?: boolean;
  isBackBtnShow?: boolean;
};

function NewTweetForm(props: NewTweetFormType) {
  const { closeHandler, isLargeTextArea, isBackBtnShow, isFilterBtnHidden } =
    props;

  const { createNewTweet } = useTweetActions();

  return (
    <TweetForm
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

NewTweetForm.defaultProps = {
  closeHandler: undefined,
  isLargeTextArea: false,
  isBackBtnShow: false,
  isFilterBtnHidden: false,
};

export default NewTweetForm;
