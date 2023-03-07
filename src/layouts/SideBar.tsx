import { BsTwitter } from "react-icons/bs";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { RiHashtag } from "react-icons/ri";
import { IoIosNotificationsOutline, IoIosNotifications } from "react-icons/io";

import AppIcon from "../components/ui/AppIcon";
import SidebarOption from "../components/sidebar/SidebarOption";

function SideBar() {
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
          isActive
        />
        <SidebarOption
          text="Explore"
          icon={RiHashtag}
          iconActive={RiHashtag}
          isActive={false}
        />
        <SidebarOption
          text="Notification"
          icon={IoIosNotificationsOutline}
          iconActive={IoIosNotifications}
          isActive={false}
        />
      </div>
    </div>
  );
}

export default SideBar;
