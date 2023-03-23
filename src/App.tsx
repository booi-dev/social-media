import Header from "./layouts/Header";
import Main from "./layouts/Main";

import useThemeControls from "./redux/control/themeControl";
import { NotiPortal } from "./noti";

function App() {
  const { theme } = useThemeControls();

  return (
    <div className={theme}>
      <div className="relative flex bg-app-white-1 dark:bg-app-black-1 dark:text-app-white-1.2 ">
        <Header />
        <Main />
        <NotiPortal />
      </div>
    </div>
  );
}

export default App;
