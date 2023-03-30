import { useEffect, useState } from "react";

import Header from "./layouts/Header";
import Main from "./layouts/Main";
import LogInIndicator from "./components/login-signup/LogInSignUpIndicator";
import LogInBox from "./components/login-signup/LogInBox";
import SignUpBox from "./components/login-signup/SignUpBox";

import useUserControls from "./redux/control/userControls";
import useThemeControls from "./redux/control/themeControl";
import { NotiPortal } from "./noti";

import { UserType } from "./types";

function App() {
  const { theme } = useThemeControls();
  const { isAuthenticate, setUser } = useUserControls();

  const [isLogInClick, setIsLogInClick] = useState(false);
  const [isSignUpClick, setIsSignUpClick] = useState(false);

  const fakeUser: UserType = {
    uid: "03",
    displayName: "Katty",
    displayPicURL:
      "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=600",
    userName: "keku",
    email: "",
    following: [],
    followers: [],
    verification: { state: false, type: "" },
  };

  useEffect(() => {
    const setUserData = async () => {
      setUser(fakeUser);
    };

    // setUserData();
  }, []);

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
        {isLogInClick && <LogInBox setIsLogInClick={setIsLogInClick} />}
        {isSignUpClick && <SignUpBox setIsSignUpClick={setIsSignUpClick} />}
      </div>
    </div>
  );
}

export default App;
