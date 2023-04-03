import useUserControls from "../../../redux/control/userControls";
import useAuth from "../../../auth/useAuth";
import useUsersData from "../../../hooks/useUsersData";
import { useNoti } from "../../../noti";

import LogInBoxModal from "./LogInBox";

type LogInFormType = {
  setIsLogInClick: (state: boolean) => void;
};

function LogIn(props: LogInFormType) {
  const { setIsLogInClick } = props;

  const { isAuthenticate, authenticateUser, setUser } = useUserControls();
  const { googleLogin, fbLogin, emailLogin } = useAuth();
  const { isUserInDb, getUserFromDb } = useUsersData();
  const { setNoti } = useNoti();

  const closeForm = () => {
    setIsLogInClick(false);
  };

  const setUserCredentials = async (authUser) => {
    const isUserInSystem = await isUserInDb(authUser.uid);
    if (isUserInSystem) {
      const userInSystem = await getUserFromDb(authUser.uid);
      setUser(userInSystem);
      authenticateUser();
    } else {
      // setRawUser(authUser);
      // setUser(userTemplate);
      // addUserToDb(userTemplate);
      setNoti("user not found. sign-up instead.");
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
    if (authUser) setUserCredentials(authUser);
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

export default LogIn;
