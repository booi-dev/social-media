import { nanoid } from "@reduxjs/toolkit";

import useUserControls from "../../redux/control/userControls";
import useTweetActions from "./useTweetActions";

import TweetForm from "../tweet/TweetForm";

type NewTweetFormType = {
  closeHandler?: () => void;
  isLargeTextArea?: boolean;
  isFilterBtnHidden?: boolean;
  isBackBtnShow?: boolean;
};

function NewTweetForm(props: NewTweetFormType) {
  const { closeHandler, isLargeTextArea, isBackBtnShow, isFilterBtnHidden } =
    props;

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
