import { useState } from "react";

import { BsPerson, BsPersonFill } from "react-icons/bs";
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

import Option from "./Option";
import More from "./More";

function HeaderOptions() {
  const [optionIndex, setOptionIndex] = useState("Home");
  const [isMoreClick, setIsMoreClick] = useState(false);

  return (
    <div className="relative flex flex-col lg:items-start md:gap-2 lg:gap-3">
      <Option
        text="Home"
        icon={AiOutlineHome}
        iconActive={AiFillHome}
        isActive={optionIndex === "Home"}
        setActive={() => setOptionIndex("Home")}
      />
      <Option
        text="Explore"
        icon={CiHashtag}
        iconActive={CiHashtag}
        isActive={optionIndex === "Explore"}
        setActive={() => setOptionIndex("Explore")}
        extraStyle="stroke-1"
      />
      <Option
        text="Notification"
        icon={IoNotificationsOutline}
        iconActive={IoNotificationsSharp}
        isActive={optionIndex === "Notification"}
        setActive={() => setOptionIndex("Notification")}
      />
      <Option
        text="Messages"
        icon={HiOutlineChatBubbleBottomCenter}
        iconActive={HiChatBubbleBottomCenter}
        isActive={optionIndex === "Messages"}
        setActive={() => setOptionIndex("Messages")}
      />
      <Option
        text="Bookmarks"
        icon={IoBookmarkOutline}
        iconActive={IoBookmark}
        isActive={optionIndex === "Bookmarks"}
        setActive={() => setOptionIndex("Bookmarks")}
      />
      <Option
        text="Profile"
        icon={BsPerson}
        iconActive={BsPersonFill}
        isActive={optionIndex === "Profile"}
        setActive={() => setOptionIndex("Profile")}
      />
      <Option
        text="More"
        icon={CiCircleMore}
        iconActive={CiCircleMore}
        isActive={optionIndex === "More"}
        setActive={() => setOptionIndex("More")}
        clickHandler={() => setIsMoreClick(true)}
      />
      {isMoreClick && <More closeHandler={() => setIsMoreClick(false)} />}
    </div>
  );
}

export default HeaderOptions;
