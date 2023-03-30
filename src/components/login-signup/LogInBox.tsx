import useUserControls from "../../redux/control/userControls";
import useAuth from "../../auth/useAuth";
import useDb from "../../data/useDb";
import getRandomPicURL from "../../utils/getRandomPic";

import LogInBoxModal from "./LogInBoxModal";
import { UserType } from "../../types";

type LogInFormType = {
  setIsLogInClick: (state: boolean) => void;
};

function LogInForm(props: LogInFormType) {
  const { setIsLogInClick } = props;

  const { isAuthenticate, authenticateUser, setUser } = useUserControls();
  const { googleLogin, fbLogin } = useAuth();
  const { isUserInDb, addUserToDb, getUserFromDb } = useDb();

  let userTemplate: UserType = {
    uid: "",
    displayName: "",
    displayPicURL:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    userName: "yo",
    email: "",
    following: [],
    followers: [],
    verification: { state: false, type: "" },
  };

  const setRawUser = async (authenticatedUser) => {
    userTemplate = {
      ...userTemplate,
      uid: authenticatedUser.uid,
      displayName: authenticatedUser.displayName,
      displayPicURL: getRandomPicURL(),
      userName: authenticatedUser.email.split("@")[0],
      email: authenticatedUser.email,
    };
  };

  const closeForm = () => {
    setIsLogInClick(false);
  };

  const setUserCredentials = async (authUser) => {
    authenticateUser();
    const isUserInSystem = await isUserInDb(authUser.uid);
    if (isUserInSystem) {
      const userInSystem = await getUserFromDb(authUser.uid);
      setUser(userInSystem);
    } else {
      setRawUser(authUser);
      setUser(userTemplate);
      addUserToDb(userTemplate);
    }
  };

  const handleGoogleLoginBtn = async () => {
    const authUser = await googleLogin();
    if (authUser) setUserCredentials(authUser);
  };

  const handleFbLoginBtn = async () => {
    const authUser = await fbLogin();
    if (authUser.user) setUserCredentials(authUser.user);
    console.log(
      `${authUser.user.photoURL}?height=500&access_token=${authUser.accessToken}`
    );
  };

  const handleSignUpLink = () => {
    closeForm();
  };

  return (
    <LogInBoxModal
      isAuthenticate={isAuthenticate}
      closeForm={closeForm}
      handleGoogleLoginBtn={handleGoogleLoginBtn}
      handleFbLoginBtn={handleFbLoginBtn}
      handleSignUpLink={handleSignUpLink}
    />
  );
}

export default LogInForm;
