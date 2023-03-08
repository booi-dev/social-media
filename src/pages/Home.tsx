import TweetForm from "../features/tweet/TweetForm";
import FeedList from "../features/tweet/FeedList";

function Home() {
  return (
    <div className="w-full max-w-[600px] bg-white border-app-white-5">
      <div className="border-[1px]">
        <h1 className="w-full py-2.5 px-3.5 text-app-font-20 font-bold">
          Home
        </h1>
        <div className="flex justify-around">
          <h2>For you</h2>
          <h2>Following</h2>
        </div>
      </div>
      <div className="border-x-[1px] border-b-[1px]">
        <TweetForm />
      </div>
      <FeedList />
    </div>
  );
}

export default Home;
