import React from "react";

type LogInIndicatorType = {
  setIsLogInClick: (state: boolean) => void;
};

function LogInIndicator(props: LogInIndicatorType) {
  const { setIsLogInClick } = props;

  return (
    <div className="fixed bottom-0 flex items-center md:justify-center w-full  h-[70px] bg-pri-blue-1">
      <div className="hidden md:block md:w-[10px] lg:w-[230px]" />
      <div className="grow md:grow-0 flex items-center md:justify-between md:w-[600px] lg:w-[1000px] px-4 lg:pr-4">
        <div className="hidden md:block">
          <h1 className="text-2xl font-bold">Don’t miss what’s happening</h1>
          <h1>People on Twitter are the first to know.</h1>
        </div>
        <div className="grow md:grow-0 w-[200px] flex items-center justify-between gap-4 ">
          <button
            type="button"
            onClick={() => setIsLogInClick(true)}
            className="border w-full py-1 font-bold rounded-2xl"
          >
            Log in
          </button>
          <button
            type="button"
            className="border w-full  py-1 rounded-2xl text-app-black-1 font-bold bg-app-white-1"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogInIndicator;
