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

  const [activeIndex, setActiveIndex] = useState("");

  return (
    <>
      <div className="absolute bottom-0 left-0 -right-40 flex flex-col  items-start bg-app-white-1 rounded-md shadow-2xl p-1 py-4 md:gap-2 lg:-right-24 lg:items-start lg:gap-3 z-20">
        <Option
          text="Setting"
          icon={IoSettingsOutline}
          iconActive={IoSettingsSharp}
          isActive={activeIndex === "Setting"}
          setActive={() => setActiveIndex("Setting")}
          isHideOnSmall={false}
        />
        <Option
          text="Darkmode"
          icon={MdOutlineDarkMode}
          iconActive={MdDarkMode}
          isActive={activeIndex === "Darkmode"}
          setActive={() => setActiveIndex("Darkmode")}
          isHideOnSmall={false}
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
      <BackDrop handleClose={closeHandler} color="black" />
    </>
  );
}

export default More;
