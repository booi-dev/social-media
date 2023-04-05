import { useState } from "react";

import useAuth from "../auth/useAuth";
import useUserControls from "../redux/control/userControls";

import { ChatSquareDotsFillIcon, FeatherIcon } from "../components/icons";
import HeaderOptions from "../components/header/HeaderOptions";

import Profile from "../components/header/Profile";
import NewPostForm from "../features/post/actions/NewPostForm";
import { AppIcon, BackDrop, WarningMsg } from "../components/UI";

function Header() {
  const { isAuthenticate, user, removeUser } = useUserControls();
  const { signAuthOut } = useAuth();

  const [isPostFormShow, setIsPostFormShow] = useState(false);
  const [isOptionShow, setIsOptionShow] = useState(false);
  const [isLogOutWarningShow, setIsLogOutWarningShow] = useState(false);

  const signOut = () => {
    signAuthOut();
    removeUser();
  };

  const handleLogOutBtn = () => {
    setIsLogOutWarningShow(true);
    setIsOptionShow(false);
  };

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
              <div className="absolute bottom-24 z-20 w-[260px] cursor-pointer space-y-1 rounded-sm bg-inherit py-2 font-bold shadow shadow-app-gray-3 dark:bg-app-black-1 [&>button]:w-full [&>button]:p-2 ">
                <button
                  type="button"
                  className=" hover:bg-app-white-3 dark:hover:bg-app-gray-2"
                >
                  Add an existing account
                </button>
                <button
                  type="button"
                  onClick={handleLogOutBtn}
                  className="m-auto w-[150px] truncate hover:bg-app-white-3 dark:hover:bg-app-gray-2"
                >
                  Log out @{user.userName}
                </button>
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
              <div className="w-full rounded-sm border p-2 shadow dark:border-app-gray-2 md:p-4">
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
        {isLogOutWarningShow && (
          <WarningMsg
            warningText="Log out of Socia?"
            warningDesc="You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account."
            warningBtn="Log out"
            warningBtnClr="white"
            handleConfirm={signOut}
            handleWarningClose={() => setIsLogOutWarningShow(false)}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
