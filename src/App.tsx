import { useState } from "react";

import useUserControls from "./redux/control/userControls";
import useThemeControls from "./redux/control/themeControl";

import Header from "./layouts/Header";
import Main from "./layouts/Main";
import LogInIndicator from "./features/login-signup/login/LogInIndicator";
import LogIn from "./features/login-signup/login/LogIn";
import SignUp from "./features/login-signup/signup/SignUp";

import { NotiPortal } from "./noti";

function App() {
  const { theme } = useThemeControls();
  const { isAuthenticate } = useUserControls();

  const [isLogInClick, setIsLogInClick] = useState(false);
  const [isSignUpClick, setIsSignUpClick] = useState(false);

  return (
    <div className={theme}>
      <div className="relative flex bg-app-white-1 dark:bg-app-black-1 dark:text-app-white-1.2 ">
        <Header />
        <Main />
        <NotiPortal />
        {!isAuthenticate && (
          <LogInIndicator
            setIsLogInClick={setIsLogInClick}
            setIsSignUpClick={setIsSignUpClick}
          />
        )}
        {isLogInClick && <LogIn closeLogIn={() => setIsLogInClick(false)} />}
        {isSignUpClick && (
          <SignUp
            SignUpType="modal"
            closeSignUp={() => setIsSignUpClick(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
