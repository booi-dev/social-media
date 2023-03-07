import { useState } from "react";

import { BsTwitter, BsPerson, BsPersonFill } from "react-icons/bs";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { CiHashtag, CiCircleMore } from "react-icons/ci";
import {
  IoNotificationsOutline,
  IoNotificationsSharp,
  IoBookmarkOutline,
  IoBookmark,
} from "react-icons/io5";

import {
  HiOutlineChatBubbleBottomCenter,
  HiChatBubbleBottomCenter,
} from "react-icons/hi2";

import AppIcon from "../components/ui/AppIcon";
import SidebarOption from "../components/sidebar/SidebarOption";

function SideBar() {
  const [optionIndex, setOptionIndex] = useState("Home");

  return (
    <div className=" px-6">
      <div className=" mb-4">
        <AppIcon icon={BsTwitter} size={32} color="blue" hoverColor="blue" />
      </div>
      <div className="flex flex-col items-start gap-1">
        <SidebarOption
          text="Home"
          icon={AiOutlineHome}
          iconActive={AiFillHome}
          isActive={optionIndex === "Home"}
          setActive={() => setOptionIndex("Home")}
        />
        <SidebarOption
          text="Explore"
          icon={CiHashtag}
          iconActive={CiHashtag}
          isActive={optionIndex === "Explore"}
          setActive={() => setOptionIndex("Explore")}
        />
        <SidebarOption
          text="Notification"
          icon={IoNotificationsOutline}
          iconActive={IoNotificationsSharp}
          isActive={optionIndex === "Notification"}
          setActive={() => setOptionIndex("Notification")}
        />
        <SidebarOption
          text="Messages"
          icon={HiOutlineChatBubbleBottomCenter}
          iconActive={HiChatBubbleBottomCenter}
          isActive={optionIndex === "Messages"}
          setActive={() => setOptionIndex("Messages")}
        />
        <SidebarOption
          text="Bookmarks"
          icon={IoBookmarkOutline}
          iconActive={IoBookmark}
          isActive={optionIndex === "Bookmarks"}
          setActive={() => setOptionIndex("Bookmarks")}
        />
        <SidebarOption
          text="Profile"
          icon={BsPerson}
          iconActive={BsPersonFill}
          isActive={optionIndex === "Profile"}
          setActive={() => setOptionIndex("Profile")}
        />
        <SidebarOption
          text="More"
          icon={CiCircleMore}
          iconActive={CiCircleMore}
          isActive={optionIndex === "More"}
          setActive={() => setOptionIndex("More")}
        />
      </div>
    </div>
  );
}

export default SideBar;
