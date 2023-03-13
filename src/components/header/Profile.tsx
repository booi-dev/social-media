import { GoKebabHorizontal } from "react-icons/go";

type ProfileType = {
  displayName: string;
  displayPicURL: string;
  userName: string;
  menuBtnHandler: () => void;
};

function Profile(props: ProfileType) {
  const { displayName, displayPicURL, userName, menuBtnHandler } = props;

  return (
    <button
      type="button"
      onClick={menuBtnHandler}
      className="flex justify-between items-center bg-inherit dark:bg-app-black-3 w-full p-2 rounded-full hover:bg-app-white-4 transition-all duration-500 cursor-pointer md:gap-2"
    >
      <div className="flex gap-2">
        <img
          src={displayPicURL}
          alt=""
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="hidden text-start lg:block ">
          <h1>{displayName}</h1>
          <h2> @{userName}</h2>
        </div>
      </div>
      <span>
        <GoKebabHorizontal className="hidden md:block" />
      </span>
    </button>
  );
}

export default Profile;
