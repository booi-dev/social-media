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
      className="flex w-full cursor-pointer items-center justify-between rounded-sm bg-app-white-2 p-2 transition-all duration-500 hover:bg-app-white-4 dark:bg-app-black-3 md:gap-2"
    >
      <div className="flex gap-2">
        <img
          src={displayPicURL}
          alt=""
          className="h-12 w-12 rounded-md object-cover"
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
