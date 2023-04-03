import { createPortal } from "react-dom";

import useThemeControls from "../../../redux/control/themeControl";

import { CrossIcon } from "../../../components/icons";
import { AppIcon, BackDrop } from "../../../components/UI";

import SignUpForm from "./SingUpForm";

type SignUpBoxType = {
  setIsSignUpClick: (state: boolean) => void;
};

function SignUpBox(props: SignUpBoxType) {
  const { setIsSignUpClick } = props;

  const { theme } = useThemeControls();

  const closeForm = () => {
    setIsSignUpClick(false);
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
          className="absolute top-0 bottom-0 z-20 flex w-full
        flex-col justify-center rounded-sm bg-app-white-1 p-8 text-app-gray-1 shadow dark:bg-app-black-1 dark:text-app-white-1 sm:top-1/2 sm:left-1/2 sm:h-max sm:w-[500px] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:scroll-pr-16"
        >
          <button
            type="button"
            className="absolute top-2 left-2"
            onClick={closeForm}
          >
            <AppIcon icon={CrossIcon} size={25} hoverColor="gray" />
          </button>

          <h1 className="mb-4 text-center text-3xl font-bold">
            Join Socia today
          </h1>

          <SignUpForm />

          <p className="text-app-font-14 text-app-gray-3">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>

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

export default SignUpBox;
