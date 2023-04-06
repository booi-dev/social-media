import { useState } from "react";

function LogInWithGuestAccounts() {
  const [activeAccount, setactiveAccount] = useState("");

  const setActive = (value: string) => {
    setactiveAccount(value);
  };

  const handleBtnClick = (value: string) => {
    setActive(value);
  };

  return (
    <div className="">
      <p className="mb-3">Log in with a guest account.</p>
      <div
        className="flex gap-1 [&>button>img]:rounded-sm [&>button>img]:transition-all [&>button>img]:duration-300 hover:[&>button>img]:origin-center hover:[&>button>img]:scale-110 [&>button]:relative [&>button]:min-h-[60px] [&>button]:w-[100px] [&>button]:overflow-hidden [&>button]:rounded-md [&>button]:border-4  [&>button]:transition-all [&>button]:duration-300 hover:[&>button]:border-pri-clr-1 
      "
      >
        <button
          type="button"
          onClick={() => handleBtnClick("0")}
          className={`${activeAccount === "0" && "border-pri-clr-1"}`}
        >
          <img
            src="https://i.ibb.co/9hy8VkK/wp8190839.jpg"
            alt="wp8190839"
            className={`${activeAccount === "0" && " scale-110"}`}
          />
        </button>
        <button
          type="button"
          onClick={() => handleBtnClick("1")}
          className={`${activeAccount === "1" && "border-pri-clr-1"}`}
        >
          <img
            src="https://i.ibb.co/Kbt8x94/walter-white.png"
            className={`${activeAccount === "1" && " scale-110"}`}
            alt="walter-white"
          />
        </button>
        <button
          type="button"
          onClick={() => handleBtnClick("2")}
          className={`${activeAccount === "2" && "border-pri-clr-1"}`}
        >
          <img
            src="https://i.ibb.co/vY8wGx7/luffy.jpg"
            className={`${activeAccount === "2" && " scale-110"}`}
            alt="luffy"
          />
        </button>
        <button
          type="button"
          onClick={() => handleBtnClick("3")}
          className={`${activeAccount === "3" && "border-pri-clr-1"}`}
        >
          <img
            src="https://i.ibb.co/rM3fvH8/wp1866751.jpg"
            className={`${activeAccount === "3" && " scale-110"}`}
            alt="wp1866751"
          />
        </button>
      </div>

      <button
        type="submit"
        className={`mt-4 w-full gap-4 rounded-sm bg-pri-clr-1 py-2 text-center font-bold text-app-black-1 hover:bg-pri-clr-2 active:bg-pri-clr-3 ${
          activeAccount !== "" ? "opacity-1" : "opacity-0"
        }`}
      >
        Log in
      </button>
    </div>
  );
}

export default LogInWithGuestAccounts;
