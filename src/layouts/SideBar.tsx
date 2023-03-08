import { useState } from "react";

import { BsTwitter } from "react-icons/bs";
import { FaFeatherAlt } from "react-icons/fa";

import AppIcon from "../components/ui/AppIcon";
import SidebarOptions from "../components/sidebar/SidebarOptions";
import Profile from "../components/sidebar/Profile";
import TweetForm from "../features/tweet/TweetForm";
import BackDrop from "../components/ui/BackDrop";

function SideBar() {
  const userName = "nganu";

  const [isTweetFormShow, setIsTweetFormShow] = useState(false);
  const [isOptionShow, setIsOptionShow] = useState(false);

  return (
    <div className="flex justify-end h-screen lg:w-[540px]">
      <div className="flex flex-col justify-between items-center w-[88px] transition-all duration-500 md:px-3 md:w-[200px] lg:w-[275px]  bg-red-300">
        <div className="flex flex-col items-center lg:items-start">
          <div className="w-min mx-auto mb-4 lg:mx-0">
            <AppIcon
              icon={BsTwitter}
              size={28}
              color="blue"
              hoverColor="blue"
            />
          </div>
          <SidebarOptions />
          <button
            type="button"
            className="lg:w-[220px] p-3 mt-4 text-app-white-1 font-bold text-app-font-20 rounded-full bg-pri-blue-1"
            onClick={() => setIsTweetFormShow(true)}
          >
            <FaFeatherAlt className="md:hidden" />
            <span className="hidden md:block">Tweet</span>
          </button>
        </div>

        <div className="relative py-4 ">
          {isOptionShow && (
            <>
              <div className="absolute bottom-24 py-4 font-bold w-full rounded-2xl z-20 space-y-1 bg-white shadow-lg cursor-pointer [&>h1]:px-4 [&>h1]:py-2">
                <h1 className="hover:bg-app-white-3">
                  Add an existing account
                </h1>
                <h1 className="hover:bg-app-white-3"> Log out @{userName}</h1>
              </div>
              <BackDrop handleClose={() => setIsOptionShow(false)} />
            </>
          )}
          <Profile
            userName={userName}
            menuBtnHandler={() => setIsOptionShow(true)}
          />
        </div>

        {isTweetFormShow && (
          <>
            <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2  w-[550px] p-4 rounded-2xl bg-white z-20">
              <TweetForm />
            </div>
            <BackDrop
              handleClose={() => setIsTweetFormShow(false)}
              color="black"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default SideBar;
