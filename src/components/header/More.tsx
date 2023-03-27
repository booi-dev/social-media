import { useState } from "react";

import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";

import useThemeControls from "../../redux/control/themeControl";

import Option from "./Option";
import BackDrop from "../ui/BackDrop";

type MoreType = {
  closeHandler: () => void;
};

function More(props: MoreType) {
  const { closeHandler } = props;

  const { theme, switchTheme } = useThemeControls();

  const [activeIndex, setActiveIndex] = useState("");

  return (
    <>
      <div className="absolute bottom-0 left-0 -right-40 z-20 flex  flex-col items-start rounded-sm bg-inherit p-1 py-4 shadow shadow-app-gray-3 md:gap-2 lg:-right-24 lg:items-start lg:gap-3">
        <Option
          text="Setting"
          icon={IoSettingsOutline}
          iconActive={IoSettingsSharp}
          isActive={activeIndex === "Setting"}
          setActive={() => setActiveIndex("Setting")}
          isHideOnSmall={false}
        />
        <Option
          text={theme === "dark" ? "Light Theme" : "Dark Theme"}
          icon={theme === "dark" ? BsSun : MdDarkMode}
          iconActive={theme === "dark" ? BsSun : MdDarkMode}
          isActive={activeIndex === "Darkmode"}
          setActive={() => setActiveIndex("Darkmode")}
          isHideOnSmall={false}
          clickHandler={switchTheme}
        />
        <Option
          text="Logout"
          icon={BiLogOutCircle}
          iconActive={BiLogOutCircle}
          isActive={activeIndex === "Logout"}
          setActive={() => setActiveIndex("Logout")}
          isHideOnSmall={false}
        />
      </div>
      <BackDrop handleClose={closeHandler} />
    </>
  );
}

export default More;
