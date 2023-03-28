import { VscSmiley } from "react-icons/vsc";
import { MdOutlineBallot } from "react-icons/md";
import { ImImage } from "react-icons/im";

import AppIcon from "../../../components/ui/AppIcon";

import { PostType } from "../../../types";

type PostBtnPanelType = {
  post: PostType;
  characterCount: number;
  isLargeTextArea?: boolean;
};

function PostBtnPanel(props: PostBtnPanelType) {
  const { post, characterCount, isLargeTextArea } = props;

  return (
    <div
      className={`flex ${
        !isLargeTextArea && "flex-col items-end"
      } items-cente w-full justify-between py-1 sm:flex-row`}
    >
      <div className="flex items-center gap-1">
        <AppIcon icon={ImImage} size={18} color="pri" hoverColor="pri" />
        <AppIcon
          icon={MdOutlineBallot}
          size={22}
          color="pri"
          hoverColor="pri"
        />
        <AppIcon icon={VscSmiley} size={20} color="pri" hoverColor="pri" />
      </div>
      <div className="flex items-center gap-1.5 text-app-gray-3">
        <div className={`${characterCount < 0 && "text-red-500"}`}>
          {characterCount}
        </div>

        <div className="h-5 border-r-[1px] border-app-gray-3 " />

        <div className="[&>button]:w-full [&>button]:rounded-sm [&>button]:px-4  [&>button]:py-1 [&>button]:font-bold [&>button]:text-app-black-1">
          {post.post && characterCount > 0 && characterCount < 280 ? (
            <button type="submit" className="bg-pri-clr-1">
              Post
            </button>
          ) : (
            <button type="button" className="bg-pri-clr-1 bg-opacity-60  ">
              Post
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

PostBtnPanel.defaultProps = {
  isLargeTextArea: false,
};

export default PostBtnPanel;
