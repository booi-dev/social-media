import {
  GlobeIcon,
  PersonHeartIcon,
  CheckIcon,
} from "../../../components/icons";
import { BackDrop } from "../../../components/ui";

type PostAudienceFilterType = {
  handleClose: () => void;
};

function PostAudienceFilter(props: PostAudienceFilterType) {
  const { handleClose } = props;

  return (
    <>
      <div className="absolute top-8 z-20 w-[250px] rounded-sm bg-app-white-1  p-4  text-app-font-17  font-medium shadow shadow-app-gray-3 dark:bg-app-black-1">
        <h1 className="py-2 text-app-font-20 font-bold">Choose audience</h1>
        <div className="flex items-center gap-1 py-2 px-1">
          <div className="rounded-full bg-pri-blue-1 p-2">
            <GlobeIcon className=" text-app-white-1" />
          </div>
          <div className="flex w-full items-center justify-between">
            <h1> Everyone</h1>
            <CheckIcon size={21} className="text-pri-clr-1" />
          </div>
        </div>
        <div className="flex items-center gap-1 py-2 px-1">
          <div className="rounded-full bg-green-500 p-2">
            <PersonHeartIcon className=" text-app-white-1" />
          </div>
          <h1>Twitter Circle</h1>
        </div>
      </div>
      <BackDrop handleClose={handleClose} />
    </>
  );
}

export default PostAudienceFilter;
