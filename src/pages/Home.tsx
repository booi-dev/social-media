import NewTweetForm from "../features/tweet/actions/NewTweetForm";
import FeedList from "../features/tweet/feeds/FeedList";

function Home() {
  return (
    <div className="w-full h-screen overflow-y-scroll hide-scrollbar max-w-[600px] bg-inherit text-inherit border-app-white-5 dark:border-app-gray-1">
      <div className="sticky top-0 left-0 right-0 bg-inherit z-[5] border-[1px] dark:border-app-gray-1">
        <h1 className="w-full h-[53px] py-2.5 px-3.5 text-app-font-20  font-bold">
          Home
        </h1>
        <div className="flex justify-around items-center pb-2 h-[53px] font-medium bg-inherit text-inherited">
          <h2 className="text-inherited">For you</h2>
          <h2>Following</h2>
        </div>
      </div>
      <div className="p-2 border-x-[1px] border-b-[1px]  dark:border-app-gray-1 md:p-4">
        <NewTweetForm />
      </div>
      <FeedList />
    </div>
  );
}

export default Home;
