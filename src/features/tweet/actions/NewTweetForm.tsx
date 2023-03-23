import { nanoid } from "@reduxjs/toolkit";

import useUserControls from "../../../redux/control/userControls";
import useTweetActions from "../hooks/useTweetActions";

import TweetForm from "../components/TweetForm";

type NewTweetFormType = {
  closeHandler?: () => void;
  isLargeTextArea?: boolean;
  isFilterBtnHidden?: boolean;
  isBackBtnShow?: boolean;
  openNotification: () => void;
};

function NewTweetForm(props: NewTweetFormType) {
  const {
    closeHandler,
    isLargeTextArea,
    isBackBtnShow,
    isFilterBtnHidden,
    openNotification,
  } = props;

  const { user } = useUserControls();
  const { createNewTweet } = useTweetActions();

  return (
    <TweetForm
      user={user}
      newTId={nanoid()}
      submitHandler={createNewTweet}
      tweetHaveType={{ type: "normal" }}
      closeHandler={closeHandler}
      isLargeTextArea={isLargeTextArea}
      isBackBtnShow={isBackBtnShow}
      isFilterBtnHidden={isFilterBtnHidden}
      openNotification={openNotification}
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
