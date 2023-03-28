import useUserControls from "../../../redux/control/userControls";
import { useNoti } from "../../../noti";

import { LinkIcon, BookmarkAddIcon } from "../../../components/icons";
import { BackDrop } from "../../../components/UI";

type SharePanelType = {
  closeHandler: () => void;
};

function SharePanel(props: SharePanelType) {
  const { closeHandler } = props;

  const { isAuthenticate } = useUserControls();
  const { setNoti } = useNoti();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("This is the text to be copied");
      closeHandler();
      setNoti("ULR copied to clipboard");
    } catch (err) {
      setNoti("ULR copy fail");
    }
  };

  return (
    <>
      <div className="absolute right-[100px] -top-[20px] z-20 w-[200px] space-y-3 rounded-sm bg-app-white-1 p-3 shadow shadow-app-gray-3 dark:bg-app-black-1">
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-2"
        >
          <LinkIcon />
          Copy link to Post
        </button>
        {isAuthenticate && (
          <button type="button" className="flex items-center gap-2">
            <BookmarkAddIcon />
            Bookmark
          </button>
        )}
      </div>
      <BackDrop handleClose={closeHandler} />
    </>
  );
}

export default SharePanel;
