import { useState } from "react";
import useUserControls from "../../../redux/control/userControls";
import useUsersData from "../../../hooks/useUsersData";

const EREN_UID = "ViLKAVyp6MSnwrV2gMgX9NBkP3K7";
const MATT_UID = "KuyMAVyp6USvwrV8tMgX5NOkP3D2";
const WALTER_UID = "yd8vFJRV3iggbnpvRglYhRPkNzZ2";
const LUFFY_UID = "FaiYAVyp6MSnwrV0tVgn5NOkP3D5";

function LogInWithGuestAccounts() {
  const [activeAccount, setactiveAccount] = useState("");

  const { setUser, authenticateUser } = useUserControls();
  const { getUserFromDb } = useUsersData();

  const setActive = (value: string) => {
    setactiveAccount(value);
  };

  const handleGuestLogin = async () => {
    let guestUser;
    if (activeAccount === "eren") guestUser = await getUserFromDb(EREN_UID);
    if (activeAccount === "walter") guestUser = await getUserFromDb(WALTER_UID);
    if (activeAccount === "luffy") guestUser = await getUserFromDb(LUFFY_UID);
    if (activeAccount === "matt") guestUser = await getUserFromDb(MATT_UID);

    setUser(guestUser);
    authenticateUser();
  };

  const handleGuestIconClick = (value: string) => {
    setActive(value);
  };

  const handleLoginBtn = () => {
    if (activeAccount === "") return;
    handleGuestLogin();
  };

  return (
    <div className="">
      <p className="mb-2">Log in with a guest account.</p>
      <div
        className="flex gap-1 [&>button>img]:rounded-sm [&>button>img]:transition-all [&>button>img]:duration-300 hover:[&>button>img]:origin-center hover:[&>button>img]:scale-110 [&>button]:relative [&>button]:min-h-[60px] [&>button]:w-[100px] [&>button]:overflow-hidden [&>button]:rounded-md [&>button]:border-4  [&>button]:transition-all [&>button]:duration-300 hover:[&>button]:border-pri-clr-1 
      "
      >
        <button
          type="button"
          onClick={() => handleGuestIconClick("eren")}
          className={`${activeAccount === "eren" && "border-pri-clr-1"}`}
        >
          <img
            src="https://i.ibb.co/9hy8VkK/wp8190839.jpg"
            alt="wp8190839"
            className={`${activeAccount === "eren" && " scale-110"}`}
          />
        </button>
        <button
          type="button"
          onClick={() => handleGuestIconClick("walter")}
          className={`${activeAccount === "walter" && "border-pri-clr-1"}`}
        >
          <img
            src="https://i.ibb.co/Kbt8x94/walter-white.png"
            className={`${activeAccount === "walter" && " scale-110"}`}
            alt="walter-white"
          />
        </button>
        <button
          type="button"
          onClick={() => handleGuestIconClick("luffy")}
          className={`${activeAccount === "luffy" && "border-pri-clr-1"}`}
        >
          <img
            src="https://i.ibb.co/vY8wGx7/luffy.jpg"
            className={`${activeAccount === "luffy" && " scale-110"}`}
            alt="luffy"
          />
        </button>
        <button
          type="button"
          onClick={() => handleGuestIconClick("matt")}
          className={`${activeAccount === "matt" && "border-pri-clr-1"}`}
        >
          <img
            src="https://i.ibb.co/rM3fvH8/wp1866751.jpg"
            className={`${activeAccount === "matt" && " scale-110"}`}
            alt="wp1866751"
          />
        </button>
      </div>

      <button
        type="submit"
        onClick={handleLoginBtn}
        className={`mt-4 w-full gap-4 rounded-sm bg-pri-clr-1 py-2 text-center font-bold text-app-black-1 hover:bg-pri-clr-2 active:bg-pri-clr-3 ${
          activeAccount !== "" ? "opacity-1" : "opacity-0"
        }`}
      >
        Log in
      </button>
    </div>
  );
}

export default LogInWithGuestAccounts;
