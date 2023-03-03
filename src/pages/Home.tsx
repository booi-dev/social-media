import TweetForm from "../features/tweet/TweetForm";

function home() {
  return (
    <div
      className="w-full max-w-[600px] border-[1px]
      border-app-white-5 px-3"
    >
      <h1 className="py-3 text-app-font-20">Home</h1>
      <div className="flex justify-around">
        <h2>for you</h2>
        <h2>for you</h2>
      </div>
      <TweetForm />
    </div>
  );
}

export default home;
