import useUserControls from "../../redux/control/userControls";
import useAuth from "../../auth/useAuth";
import useUsersData from "../../hooks/useUsersData";
import getRandomPicURL from "../../utils/getRandomPic";
import { useNoti } from "../../noti";

import LogInBoxModal from "./LogInBoxModal";
import { UserType } from "../../types";

type LogInFormType = {
  setIsLogInClick: (state: boolean) => void;
};

function LogInForm(props: LogInFormType) {
  const { setIsLogInClick } = props;

  const { isAuthenticate, authenticateUser, setUser } = useUserControls();
  const { googleLogin, fbLogin, emailLogin } = useAuth();
  const { isUserInDb, addUserToDb, getUserFromDb } = useUsersData();
  const { setNoti } = useNoti();

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
    setNoti(
      "a random display pic is generated. you can update in profile section",
      6
    );
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
    else setNoti("something went wrong. try different credential", 5);
  };

  const handleFbLoginBtn = async () => {
    const authUser = await fbLogin();
    if (authUser) setUserCredentials(authUser);
    else setNoti("something went wrong. try different credential", 5);
  };

  const handleEmailLoginBtn = async (email, password) => {
    const authUser = await emailLogin(email, password);
    if (authUser) console.log(authUser);
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
      handleEmailLoginBtn={handleEmailLoginBtn}
    />
  );
}

export default LogInForm;
