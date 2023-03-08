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
    <div className="flex flex-col justify-between px-3 bg-white lg:w-[300px] ">
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
            <div className="absolute bottom-24 py-4 font-bold w-full rounded-2xl z-20 space-y-1 bg-white shadow-lg cursor-pointer [&>h1]:px-4 [&>h1]:py-2">
              <h1 className="hover:bg-app-white-3">Add an existing account</h1>
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
            <Form />
          </div>
          <BackDrop
            handleClose={() => setIsTweetFormShow(false)}
            color="black"
          />
        </>
      )}
    </div>
  );
}

export default SideBar;
