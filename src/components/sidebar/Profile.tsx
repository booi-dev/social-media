import React from "react";
import { GoKebabHorizontal } from "react-icons/go";

type ProfileType = {
  userName: string;
  menuBtnHandler: () => void;
};

function Profile(props: ProfileType) {
  const { userName, menuBtnHandler } = props;

  const profileImgLink =
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";

  return (
    <div className="flex gap-2 justify-between items-center p-3 rounded-full hover:bg-app-white-4 transition-all duration-500 cursor-pointer">
      <div className="flex gap-2">
        <img
          src={profileImgLink}
          alt=""
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h1> Booi Mangang</h1>
          <h2> @{userName}</h2>
        </div>
      </div>
      <button type="button" onClick={menuBtnHandler}>
        <GoKebabHorizontal />
      </button>
    </div>
  );
}

export default Profile;
