import { createPortal } from "react-dom";

import useThemeControls from "../../redux/control/themeControl";

import { AppleIcon, GoogleIcon, CrossIcon } from "../../components/icons";
import { AppIcon, BackDrop } from "../../components/UI";

type LogInFormType = {
  setIsLogInClick: (state: boolean) => void;
};

function LogInForm(props: LogInFormType) {
  const { setIsLogInClick } = props;

  const { theme } = useThemeControls();

  const closeForm = () => {
    setIsLogInClick(false);
  };

  const handleSignUpBtn = () => {
    closeForm();
  };

  const portal = document.getElementById("portal");

  let LogInFormPortal: React.ReactPortal | React.ReactElement = <div />;

  if (portal) {
    LogInFormPortal = createPortal(
      <div className={theme}>
        <div
          className="absolute top-0 bottom-0 z-20 flex w-full flex-col
        justify-center rounded-sm bg-app-white-1 p-16 text-app-gray-1 shadow dark:bg-app-black-1 dark:text-app-white-1 sm:top-1/2 sm:left-1/2 sm:h-max sm:w-[500px] sm:-translate-x-1/2 sm:-translate-y-1/2"
        >
          <button
            type="button"
            className="absolute top-2 left-2"
            onClick={closeForm}
          >
            <AppIcon icon={CrossIcon} size={25} hoverColor="gray" />
          </button>

          <h1 className="text-center text-3xl font-bold">Sign In to Socia</h1>

          <div
            className="mt-4 flex flex-col gap-4 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:gap-2 [&>button]:rounded-sm [&>button]:bg-app-white-2 [&>button]:py-2 
      [&>button]:text-app-black-1"
          >
            <button type="button">
              <GoogleIcon />
              Sign up with Google
            </button>
            <button type="button">
              <AppleIcon />
              Sign up with apple
            </button>
          </div>

          <div
            className="flex w-full items-center py-3 text-center
          before:mr-1 before:h-2 before:w-full before:border-b before:border-app-gray-3 before:content-[''] after:ml-1  after:h-2 after:w-full after:border-b after:border-app-gray-3 after:content-['']"
          >
            or
          </div>

          <form className="">
            <div className="rounded-sm border border-app-gray-3 p-2">
              <label
                htmlFor="input"
                className="text-app-font-15 text-pri-clr-1"
              >
                Phone, email, or username
                <input
                  id="input"
                  className="w-full rounded-sm bg-app-white-2 py-2"
                />
              </label>
              <label
                htmlFor="input"
                className="text-app-font-15 text-pri-clr-1"
              >
                Password
                <input
                  id="input"
                  className="w-full rounded-sm bg-app-white-2 py-2"
                />
              </label>
            </div>

            {/* <button
              type="button"
              className="my-2 mt-6 w-full rounded-sm bg-app-white-2 py-2 font-bold text-app-black-1"
            >
              Next
            </button> */}
          </form>

          <div className="mt-4 flex flex-col gap-4 [&>button]:rounded-sm [&>button]:py-2 [&>button]:font-bold">
            <button type="button" className="bg-pri-clr-1 text-app-black-1">
              Log in
            </button>
          </div>
          <p className="mt-4 text-app-gray-3">
            {`Don't have an account?`}{" "}
            <button
              type="button"
              onClick={handleSignUpBtn}
              className="text-pri-clr-1"
            >
              Sign up
            </button>
          </p>
        </div>
        <BackDrop handleClose={closeForm} color="blue" />
      </div>,
      portal
    );
  }

  return LogInFormPortal;
}

export default LogInForm;
