import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

function LogInWidget() {
  return (
    <div className="p-4 mt-4 border border-app-gray-1  rounded-xl">
      <h1 className="text-xl font-bold">New to Twitter?</h1>
      <p className="text-app-font-13 text-app-gray-3">
        Sign up now to get your own personalized timeline!
      </p>
      <div
        className="flex flex-col gap-4 mt-4 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:gap-2 [&>button]:py-2 [&>button]:rounded-2xl [&>button]:bg-app-white-1 
      [&>button]:text-app-black-1"
      >
        <button type="button">
          <FcGoogle />
          Sign up with Google
        </button>
        <button type="button">
          <BsApple />
          Sign up with apple
        </button>
        <button type="button"> Create account</button>
      </div>
    </div>
  );
}

export default LogInWidget;
