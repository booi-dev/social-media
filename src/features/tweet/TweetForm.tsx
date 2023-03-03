import { useState } from "react";

// import { useForm } from "react-hook-form";

const picUrl =
  "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

function TweetForm() {
  //   const { register } = useForm();
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  console.log(inputValue);

  return (
    <form className="flex flex-col gap-2">
      <div className="flex gap-1">
        <img
          className="h-14 w-14 rounded-full object-cover"
          src={picUrl}
          alt=""
        />
        <input
          className="w-full border-[0px] font-medium text-app-black-3"
          onChange={handleInput}
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
