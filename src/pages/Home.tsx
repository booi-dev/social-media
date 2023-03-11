import useUserControls from "../redux/control/userControls";
import TweetBox from "../components/tweetbox/TweetBox";
import FeedList from "../features/tweet/FeedList";

function Home() {
  const { user } = useUserControls();
  return (
    <div className="w-full h-screen overflow-y-scroll hide-scrollbar max-w-[600px] bg-white border-app-white-5">
      <div className="sticky top-0 left-0 right-0 bg-white z-[5] border-[1px]">
        <h1 className="w-full h-[53px] py-2.5 px-3.5 text-app-font-20  font-bold">
          Home
        </h1>
        <div className="flex justify-around items-center pb-2 h-[53px] font-medium text-app-gray-3">
          <h2 className="text-app-black-1">For you</h2>
          <h2>Following</h2>
        </div>
      </div>
      <div className="p-2 border-x-[1px] border-b-[1px] md:p-4">
        <TweetBox userPic={user.displayPic} />
      </div>
      <FeedList />
    </div>
  );
}

export default Home;
