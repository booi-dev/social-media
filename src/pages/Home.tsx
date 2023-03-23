import { useState } from "react";

import NewTweetForm from "../features/tweet/actions/NewTweetForm";
import FeedList from "../features/tweet/feeds/FeedList";
import NotificationPortal from "../features/notification/NotificationPortal";

function Home() {
  const [isNotificationOpen, setisNotificationOpen] = useState(false);

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
        <NewTweetForm openNotification={() => setisNotificationOpen(true)} />
      </div>
      <FeedList />
      {isNotificationOpen && (
        <NotificationPortal
          text="Your tweet is sent"
          timeout={3}
          closeHandler={() => setisNotificationOpen(false)}
        />
      )}
    </div>
  );
}

export default Home;
