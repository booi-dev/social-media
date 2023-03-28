type LogInIndicatorType = {
  setIsLogInClick: (state: boolean) => void;
  setIsSignUpClick: (state: boolean) => void;
};

function LogInSignUpIndicator(props: LogInIndicatorType) {
  const { setIsLogInClick, setIsSignUpClick } = props;

  return (
    <div className="fixed bottom-0 flex h-[70px] w-full items-center  bg-pri-clr-1 md:justify-center">
      <div className="hidden md:block md:w-[10px] lg:w-[230px]" />
      <div className="flex grow items-center px-4 md:w-[600px] md:grow-0 md:justify-between lg:w-[1000px] lg:pr-4">
        <div className="hidden md:block">
          <h1 className="text-2xl font-bold">Don’t miss what’s happening</h1>
          <h1>People on Twitter are the first to know.</h1>
        </div>
        <div className="flex w-[200px] grow items-center justify-between gap-4 md:grow-0 ">
          <button
            type="button"
            onClick={() => setIsLogInClick(true)}
            className="w-full rounded-2xl border py-1 font-bold"
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => setIsSignUpClick(true)}
            className="w-full rounded-2xl  border bg-app-white-1 py-1 font-bold text-app-black-1"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogInSignUpIndicator;
