import useUserControls from "../redux/control/userControls";

import NewPostForm from "../features/post/actions/NewPostForm";
import FeedList from "../features/post/feeds/FeedList";

function Home() {
  const { isAuthenticate } = useUserControls();

  return (
    <div className="hide-scrollbar h-screen w-full max-w-[600px] overflow-y-scroll border-app-white-5 bg-inherit text-inherit dark:border-app-gray-1">
      <div className="sticky top-0 left-0 right-0 z-[5] border-[1px] bg-inherit dark:border-app-gray-1">
        <h1 className="h-[53px] w-full py-2.5 px-3.5 text-app-font-20  font-bold">
          Home
        </h1>
        <div className="text-inherited flex h-[53px] items-center justify-around bg-inherit pb-2 font-medium">
          <h2 className="text-inherited">For you</h2>
          <h2>Following</h2>
        </div>
      </div>
      {isAuthenticate && (
        <div className="border-x border-b p-2  dark:border-app-gray-1 md:p-4">
          <NewPostForm />
        </div>
      )}
      <FeedList />
    </div>
  );
}

export default Home;
