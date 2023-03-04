import { useState } from "react";

const picUrl =
  "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

function TweetForm() {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue("");
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex gap-1">
        <img
          className="h-14 w-14 rounded-full object-cover"
          src={picUrl}
          alt=""
        />
        <input
          className="w-full border-[0px] text-app-font-20 font-normal text-app-black-3 focus:outline-none"
          placeholder="tweet"
          onChange={handleInput}
          value={inputValue}
        />
      </div>
      <div>
        <button type="submit" className="w-full bg-pri-blue-1 px-2">
          tweet
        </button>
      </div>
    </form>
  );
}

export default TweetForm;
