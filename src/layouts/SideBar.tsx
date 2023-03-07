import { useState } from "react";

import { BsTwitter } from "react-icons/bs";

import AppIcon from "../components/ui/AppIcon";
import SidebarOptions from "../components/sidebar/SidebarOptions";
import Profile from "../components/sidebar/Profile";
import Form from "../features/tweet/Form";
import BackDrop from "../components/ui/BackDrop";

function SideBar() {
  const userName = "nganu";

  const [isTweetFormShow, setIsTweetFormShow] = useState(false);
  const [isOptionShow, setIsOptionShow] = useState(false);

  return (
    <div className="flex flex-col justify-between px-3 lg:w-[300px] bg-red-300">
      <div>
        <div className="mb-4 w-min">
          <AppIcon icon={BsTwitter} size={32} color="blue" hoverColor="blue" />
        </div>
        <SidebarOptions />
        <button
          type="button"
          className="w-full p-3 mt-4 text-app-white-1 font-bold text-app-font-20 rounded-full bg-pri-blue-1"
          onClick={() => setIsTweetFormShow(true)}
        >
          Tweet
        </button>
      </div>

      <div className="relative py-4 ">
        {isOptionShow && (
          <>
            <div className="absolute bottom-24 p-4 font-bold bg-white w-full rounded-full text-center z-20">
              <h1> Log out @{userName}</h1>
            </div>
            <BackDrop handleClose={() => setIsOptionShow(false)} />
          </>
        )}
        {/* profile section */}
        <Profile
          userName={userName}
          menuBtnHandler={() => setIsOptionShow(true)}
        />
      </div>

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
