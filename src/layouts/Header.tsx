import { useState } from "react";

import useUserControls from "../redux/control/userControls";

import { ChatSquareDotsFillIcon, FeatherIcon } from "../components/icons";
import { AppIcon, BackDrop } from "../components/UI";
import HeaderOptions from "../components/header/HeaderOptions";

import Profile from "../components/header/Profile";
import NewPostForm from "../features/post/actions/NewPostForm";

function Header() {
  const userName = "nganu";

  const { isAuthenticate, user } = useUserControls();

  const [isPostFormShow, setIsPostFormShow] = useState(false);
  const [isOptionShow, setIsOptionShow] = useState(false);

  return (
    <header className="flex h-screen justify-end bg-inherit text-inherit lg:w-[540px]">
      <div className="flex h-full w-[80px] flex-col items-center justify-between bg-inherit transition-all duration-500 md:w-[200px] md:items-stretch md:px-2 lg:w-[275px]">
        <div className="flex flex-col items-center bg-inherit lg:items-start ">
          <div className="mt-2 flex w-min items-center lg:mx-2">
            <AppIcon icon={ChatSquareDotsFillIcon} size={28} color="pri" />
            <h1 className="hidden text-app-font-20 font-bold text-pri-clr-1 sm2:block">
              SOCIA
            </h1>
          </div>
          <HeaderOptions />
          {isAuthenticate && (
            <button
              type="button"
              className="mt-2 rounded-sm bg-pri-clr-1 p-4 text-app-font-20 font-bold text-app-black-1 hover:bg-pri-clr-2 md:py-3 lg:w-[220px]"
              onClick={() => setIsPostFormShow(true)}
            >
              <FeatherIcon className="md:hidden" />
              <span className="hidden md:block">+Post</span>
            </button>
          )}
        </div>

        <div className="relative py-4 ">
          {isOptionShow && (
            <>
              <div className="absolute bottom-24 z-20 w-[260px] cursor-pointer space-y-1 rounded-sm bg-inherit py-2 font-bold shadow shadow-app-gray-3 dark:bg-app-black-1 [&>h1]:px-4 [&>h1]:py-2">
                <h1 className="hover:bg-app-white-3 dark:hover:bg-app-gray-2">
                  Add an existing account
                </h1>
                <h1 className="hover:bg-app-white-3 dark:hover:bg-app-gray-2">
                  {" "}
                  Log out @{userName}
                </h1>
              </div>
              <BackDrop handleClose={() => setIsOptionShow(false)} />
            </>
          )}
          {isAuthenticate && (
            <Profile
              displayName={user.displayName}
              displayPicURL={user.displayPicURL}
              userName={user.userName}
              menuBtnHandler={() => setIsOptionShow(true)}
            />
          )}
        </div>

        {isPostFormShow && (
          <>
            <div className="absolute inset-1 z-20 flex items-center rounded-sm bg-inherit sm:top-1/2 sm:left-1/2 sm:h-max sm:w-[500px] sm:-translate-x-1/2 sm:-translate-y-1/2 ">
              <div className="w-full border p-2 shadow dark:border-app-gray-2 md:p-4">
                <NewPostForm
                  closeHandler={() => setIsPostFormShow(false)}
                  isLargeTextArea
                  isBackBtnShow
                />
              </div>
            </div>
            <BackDrop
              handleClose={() => setIsPostFormShow(false)}
              color="blue"
            />
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
