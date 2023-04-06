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
      submitHandler={createNewPost}
      postHaveType={{ type: "normal", originalPostId: "" }}
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
