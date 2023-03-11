import { VscSmiley } from "react-icons/vsc";
import { MdOutlineBallot } from "react-icons/md";
import { ImImage } from "react-icons/im";

import AppIcon from "../ui/AppIcon";

import { TweetType } from "../../types";

type TweetBtnPanelType = {
  tweet: TweetType;
  characterCount: number;
  isLargeTextArea?: boolean;
};

function TweetBtnPanel(props: TweetBtnPanelType) {
  const { tweet, characterCount, isLargeTextArea } = props;

  console.log("large", isLargeTextArea);

  return (
    <div
      className={`flex ${
        !isLargeTextArea && "flex-col items-end"
      } items-cente w-full py-1 sm:flex-row justify-between`}
    >
      <div className="flex items-center gap-1">
        <AppIcon icon={ImImage} size={18} color="blue" hoverColor="blue" />
        <AppIcon
          icon={MdOutlineBallot}
          size={22}
          color="blue"
          hoverColor="blue"
        />
        <AppIcon icon={VscSmiley} size={20} color="blue" hoverColor="blue" />
      </div>
      <div className="flex gap-1.5 text-app-gray-3 items-center">
        <div className={`${characterCount < 0 && "text-red-500"}`}>
          {characterCount}
        </div>

        <div className="border-r-[1px] border-app-gray-3 h-5 " />

        <div className="[&>button]:rounded-3xl [&>button]:text-app-white-1 [&>button]:w-full  [&>button]:px-4 [&>button]:py-1 [&>button]:font-bold">
          {tweet.tweet && characterCount > 0 && characterCount < 280 ? (
            <button type="submit" className="bg-pri-blue-1">
              Tweet
            </button>
          ) : (
            <button type="button" className="bg-pri-blue-1 bg-opacity-60 ">
              Tweet
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

TweetBtnPanel.defaultProps = {
  isLargeTextArea: false,
};

export default TweetBtnPanel;
