import Form from "../features/tweet/Form";
import FeedList from "../features/tweet/FeedList";

function Home() {
  return (
    <div className="border-app-white-5 ">
      <div className=" border-[1px]">
        <h1 className="p-3 text-app-font-20">Home</h1>
        <div className="flex justify-around">
          <h2>For you</h2>
          <h2>Following</h2>
        </div>
      </div>
      <Form />
      <FeedList />
    </div>
  );
}

export default Home;
