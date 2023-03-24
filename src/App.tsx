import { useEffect } from "react";

import Header from "./layouts/Header";
import Main from "./layouts/Main";
import LogSignIndicator from "./components/ui/LogSignIndicator";

import useUserControls from "./redux/control/userControls";
import useThemeControls from "./redux/control/themeControl";
import { NotiPortal } from "./noti";

import genUser from "./utils/genUser";

function App() {
  const { theme } = useThemeControls();
  const { isAuthenticate, setUser } = useUserControls();

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
        {!isAuthenticate && <LogSignIndicator />}
      </div>
    </div>
  );
}

export default App;
