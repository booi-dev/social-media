import { useState } from "react";

import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";

import Option from "./Option";
import BackDrop from "../ui/BackDrop";

type MoreType = {
  closeHandler: () => void;
};

function More(props: MoreType) {
  const { closeHandler } = props;

  const [activeIndex, setActiveIndex] = useState("setting");

  return (
    <>
      <div className="absolute bottom-0 left-0 -right-40 flex flex-col  items-start bg-app-white-1 rounded-md shadow-2xl p-1 py-4 md:gap-2 lg:-right-24 lg:items-start lg:gap-3 z-20">
        <Option
          text="setting"
          icon={IoSettingsOutline}
          iconActive={IoSettingsSharp}
          isActive={activeIndex === "setting"}
          setActive={() => setActiveIndex("setting")}
          isHideOnSmall={false}
        />
        <Option
          text="darkmode"
          icon={MdOutlineDarkMode}
          iconActive={MdDarkMode}
          isActive={activeIndex === "darkmode"}
          setActive={() => setActiveIndex("darkmode")}
          isHideOnSmall={false}
        />
        <Option
          text="logout"
          icon={BiLogOutCircle}
          iconActive={BiLogOutCircle}
          isActive={activeIndex === "logout"}
          setActive={() => setActiveIndex("logout")}
          isHideOnSmall={false}
        />
      </div>
      <BackDrop handleClose={closeHandler} color="black" />
    </>
  );
}

export default More;
