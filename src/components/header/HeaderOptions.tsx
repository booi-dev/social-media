import { useState } from "react";

import {
  HomeIcon,
  HomeFillIcon,
  HashTagIcon,
  NotificationIcon,
  NotificationFillIcon,
  BookmarkIcon,
  BookmarkFillIcon,
  ChatBubbleBottomCenterIcon,
  ChatBubbleBottomCenterFillIcon,
  PersonIcon,
  PersonFillIcon,
  CircleMoreIcon,
} from "../icons";

import useUserControls from "../../redux/control/userControls";

import Option from "./Option";
import More from "./More";

function HeaderOptions() {
  const [optionIndex, setOptionIndex] = useState("Home");
  const [isMoreClick, setIsMoreClick] = useState(false);

  const { isAuthenticate } = useUserControls();

  return (
    <div className="relative flex flex-col bg-inherit md:gap-2 lg:items-start lg:gap-3">
      <Option
        text="Home"
        icon={HomeIcon}
        iconActive={HomeFillIcon}
        isActive={optionIndex === "Home"}
        setActive={() => setOptionIndex("Home")}
      />

      <Option
        text="Explore"
        icon={HashTagIcon}
        iconActive={HashTagIcon}
        isActive={optionIndex === "Explore"}
        setActive={() => setOptionIndex("Explore")}
        extraStyle="stroke-1"
      />
      {isAuthenticate && (
        <>
          <Option
            text="Notification"
            icon={NotificationIcon}
            iconActive={NotificationFillIcon}
            isActive={optionIndex === "Notification"}
            setActive={() => setOptionIndex("Notification")}
          />
          <Option
            text="Messages"
            icon={ChatBubbleBottomCenterIcon}
            iconActive={ChatBubbleBottomCenterFillIcon}
            isActive={optionIndex === "Messages"}
            setActive={() => setOptionIndex("Messages")}
          />
          <Option
            text="Bookmarks"
            icon={BookmarkIcon}
            iconActive={BookmarkFillIcon}
            isActive={optionIndex === "Bookmarks"}
            setActive={() => setOptionIndex("Bookmarks")}
          />
          <Option
            text="Profile"
            icon={PersonIcon}
            iconActive={PersonFillIcon}
            isActive={optionIndex === "Profile"}
            setActive={() => setOptionIndex("Profile")}
          />
          <Option
            text="More"
            icon={CircleMoreIcon}
            iconActive={CircleMoreIcon}
            isActive={optionIndex === "More"}
            setActive={() => setOptionIndex("More")}
            clickHandler={() => setIsMoreClick(true)}
          />
          {isMoreClick && <More closeHandler={() => setIsMoreClick(false)} />}
        </>
      )}
    </div>
  );
}

export default HeaderOptions;
