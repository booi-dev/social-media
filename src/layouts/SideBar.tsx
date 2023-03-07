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
import Form from "../features/tweet/Form";
import BackDrop from "../components/ui/BackDrop";

function SideBar() {
  const [optionIndex, setOptionIndex] = useState("Home");
  const [isTweetFormShow, setIsTweetFormShow] = useState(false);

  return (
    <div className="px-3 lg:w-[300px]">
      <div className="mb-4 w-min">
        <AppIcon icon={BsTwitter} size={32} color="blue" hoverColor="blue" />
      </div>
      <div className="flex flex-col items-start gap-5">
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
      <button
        type="button"
        className="w-full p-3 mt-4 text-app-white-1 font-bold text-app-font-20 rounded-full bg-pri-blue-1"
        onClick={() => setIsTweetFormShow(true)}
      >
        Tweet
      </button>
      {isTweetFormShow && (
        <>
          <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2  w-[550px] p-4 rounded-2xl bg-white z-20">
            <Form />
          </div>
          <BackDrop handleClose={() => setIsTweetFormShow(false)} />
        </>
      )}
    </div>
  );
}

export default SideBar;
