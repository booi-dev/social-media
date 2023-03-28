import { nanoid } from "@reduxjs/toolkit";

import usePostActions from "../hooks/usePostActions";

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

  const { createNewPost } = usePostActions();

  return (
    <PostForm
      newPId={nanoid()}
      submitHandler={createNewPost}
      postHaveType={{ type: "normal" }}
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
