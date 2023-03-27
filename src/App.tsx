import { useEffect, useState } from "react";

import Header from "./layouts/Header";
import Main from "./layouts/Main";
import LogInIndicator from "./features/login/LogIndicator";
import LogInForm from "./features/login/LogInForm";

import useUserControls from "./redux/control/userControls";
import useThemeControls from "./redux/control/themeControl";
import { NotiPortal } from "./noti";

import genUser from "./utils/genUser";

function App() {
  const { theme } = useThemeControls();
  const { isAuthenticate, setUser } = useUserControls();

  const [isLogInClick, setIsLogInClick] = useState(false);

  useEffect(() => {
    const setUserData = async () => {
      const fakeUser = await genUser();
      setUser(fakeUser);
    };

    setUserData();
  }, []);

  return (
    <div className={theme}>
      <div className="relative flex bg-app-white-1 dark:bg-app-black-1 dark:text-app-white-1.2 ">
        <Header />
        <Main />
        <NotiPortal />
        {!isAuthenticate && (
          <LogInIndicator setIsLogInClick={setIsLogInClick} />
        )}
        {isLogInClick && <LogInForm setIsLogInClick={setIsLogInClick} />}
      </div>
    </div>
  );
}

export default App;
