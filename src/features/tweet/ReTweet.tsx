import { AiOutlineRetweet } from "react-icons/ai";
import { TbPencilMinus } from "react-icons/tb";
import BackDrop from "../../components/ui/BackDrop";

type ReTweetType = {
  closeHandler: () => void;
};

function ReTweet({ closeHandler }: ReTweetType) {
  return (
    <>
      <div className="absolute -right-5 -left-5 -bottom-10 flex flex-col gap-3 p-3 rounded-md dark:bg-app-black-1 text-inherit shadow shadow-app-gray-3 w-[150px] z-20">
        <button type="button" className="flex items-center gap-2">
          <AiOutlineRetweet />
          Retweet{" "}
        </button>
        <button type="button" className="flex items-center gap-2">
          <TbPencilMinus />
          Quote Tweet{" "}
        </button>
      </div>
      <BackDrop handleClose={closeHandler} />
    </>
  );
}

export default ReTweet;
