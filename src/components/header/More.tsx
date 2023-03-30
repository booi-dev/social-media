import { useState } from "react";
import useThemeControls from "../../redux/control/themeControl";
import useAuth from "../../auth/useAuth";
import useUserControls from "../../redux/control/userControls";

import {
  SettingIcon,
  SettingFillIcon,
  SunIcon,
  LogOutIcon,
  DarkModeIcon,
} from "../icons";
import { BackDrop } from "../UI";

import Option from "./Option";

type MoreType = {
  closeHandler: () => void;
};

function More(props: MoreType) {
  const { closeHandler } = props;

  const { theme, switchTheme } = useThemeControls();
  const { signAuthOut } = useAuth();
  const { removeUser } = useUserControls();

  const [activeIndex, setActiveIndex] = useState("");

  const signOut = () => {
    signAuthOut();
    removeUser();
  };

  return (
    <>
      <div className="absolute bottom-0 left-0 -right-40 z-20 flex  flex-col items-start rounded-sm bg-inherit p-1 py-4 shadow shadow-app-gray-3 md:gap-2 lg:-right-24 lg:items-start lg:gap-3">
        <Option
          text="Setting"
          icon={SettingIcon}
          iconActive={SettingFillIcon}
          isActive={activeIndex === "Setting"}
          setActive={() => setActiveIndex("Setting")}
          isHideOnSmall={false}
        />
        <Option
          text={theme === "dark" ? "Light Theme" : "Dark Theme"}
          icon={theme === "dark" ? SunIcon : DarkModeIcon}
          iconActive={theme === "dark" ? SunIcon : DarkModeIcon}
          isActive={activeIndex === "Darkmode"}
          setActive={() => setActiveIndex("Darkmode")}
          isHideOnSmall={false}
          clickHandler={switchTheme}
        />
        <Option
          text="Logout"
          icon={LogOutIcon}
          iconActive={LogOutIcon}
          isActive={activeIndex === "Logout"}
          setActive={() => setActiveIndex("Logout")}
          isHideOnSmall={false}
          clickHandler={signOut}
        />
      </div>
      <BackDrop handleClose={closeHandler} />
    </>
  );
}

export default More;
