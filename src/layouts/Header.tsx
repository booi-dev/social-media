import { useState } from "react";

import { BsTwitter } from "react-icons/bs";
import { FaFeatherAlt } from "react-icons/fa";

import useUserControls from "../redux/control/userControls";

import AppIcon from "../components/ui/AppIcon";
import HeaderOptions from "../components/header/HeaderOptions";
import Profile from "../components/header/Profile";
import TweetForm from "../components/tweetbox/TweetBox";
import BackDrop from "../components/ui/BackDrop";

function Header() {
  const userName = "nganu";

  const { user } = useUserControls();

  const [isTweetFormShow, setIsTweetFormShow] = useState(false);
  const [isOptionShow, setIsOptionShow] = useState(false);

  return (
    <div className="flex justify-end h-screen lg:w-[540px]">
      <div className="flex flex-col justify-between items-center w-[80px] h-full transition-all duration-500 md:items-stretch md:px-2 md:w-[200px] lg:w-[275px]">
        <div className="flex flex-col items-center lg:items-start">
          <div className="w-min mt-2 lg:mx-2">
            <AppIcon
              icon={BsTwitter}
              size={28}
              color="blue"
              hoverColor="blue"
            />
          </div>
          <HeaderOptions />
          <button
            type="button"
            className="lg:w-[220px] p-4 mt-2 text-app-white-1 font-bold text-app-font-20 rounded-full bg-pri-blue-1 hover:bg-pri-blue-2 md:py-3"
            onClick={() => setIsTweetFormShow(true)}
          >
            <FaFeatherAlt className="md:hidden" />
            <span className="hidden md:block">Tweet</span>
          </button>
        </div>

        <div className="relative py-4 ">
          {isOptionShow && (
            <>
              <div className="absolute w-[250px] bottom-24 py-4 font-bold rounded-2xl z-20 space-y-1 bg-white shadow-lg cursor-pointer [&>h1]:px-4 [&>h1]:py-2">
                <h1 className="hover:bg-app-white-3">
                  Add an existing account
                </h1>
                <h1 className="hover:bg-app-white-3"> Log out @{userName}</h1>
              </div>
              <BackDrop handleClose={() => setIsOptionShow(false)} />
            </>
          )}
          <Profile
            displayName={user.displayName}
            displayPic={user.displayPic}
            userName={user.userName}
            menuBtnHandler={() => setIsOptionShow(true)}
          />
        </div>

        {isTweetFormShow && (
          <>
            <div className="absolute inset-0 p-2 rounded-2xl bg-white z-20 sm:h-max sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2  sm:w-[500px] md:p-4 ">
              <TweetForm
                handleClose={() => setIsTweetFormShow(false)}
                isLargeTextArea
                userPic={user.displayPic}
              />
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

export default Header;
