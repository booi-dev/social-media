import useUserControls from "../../../redux/control/userControls";
import useUsersData from "../../../hooks/useUsersData";
import useAuth from "../../../auth/useAuth";
import { useNoti } from "../../../noti";
import getRandomPicURL from "../../../utils/getRandomPic";

import SignUpBox from "./SignUpBox";
import SignUpWidget from "./SignUpWidget";

import { UserType } from "../../../types";

type SignUpProps = {
  SignUpType: "modal" | "widget";
  closeSignUp?: () => void;
};

function SignUp(props: SignUpProps) {
  const { SignUpType, closeSignUp } = props;

  const { setNoti } = useNoti();
  const { authenticateUser, setUser } = useUserControls();
  const { isUserInDb, addUserToDb, getUserFromDb } = useUsersData();
  const { googleLogin, fbLogin, emailLogin } = useAuth();

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

  const handleCloseSignUp = () => {
    if (closeSignUp) closeSignUp();
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

  const setUserCredentials = async (authUser) => {
    const isUserInSystem = await isUserInDb(authUser.uid);
    if (isUserInSystem) {
      // const userInSystem = await getUserFromDb(authUser.uid);
      setNoti("account already exist. try login instead.");
    } else {
      setRawUser(authUser);
      setUser(userTemplate);
      addUserToDb(userTemplate);
      setNoti("sign-up successful. you can login.");
    }
    handleCloseSignUp();
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
    if (authUser) setUserCredentials(authUser);
  };

  if (SignUpType === "widget")
    return (
      <SignUpWidget
        handleGoogleLoginBtn={handleGoogleLoginBtn}
        handleFbLoginBtn={handleFbLoginBtn}
        handleEmailLoginBtn={handleEmailLoginBtn}
      />
    );

  return (
    <SignUpBox
      closeSignUp={handleCloseSignUp}
      handleGoogleLoginBtn={handleGoogleLoginBtn}
      handleFbLoginBtn={handleFbLoginBtn}
      handleEmailLoginBtn={handleEmailLoginBtn}
    />
  );
}

SignUp.defaultProps = {
  closeSignUp: undefined,
};

export default SignUp;
