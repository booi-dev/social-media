import useUserControls from "../../../redux/control/userControls";
import useAuth from "../../../auth/useAuth";
import useUsersData from "../../../hooks/useUsersData";
import { useNoti } from "../../../noti";

import LogInBox from "./LogInBox";

type LogInProps = {
  closeLogIn: () => void;
};

function LogIn(props: LogInProps) {
  const { closeLogIn } = props;

  const { isAuthenticate, authenticateUser, setUser } = useUserControls();
  const { googleLogin, fbLogin, emailLogin } = useAuth();
  const { isUserInDb, getUserFromDb } = useUsersData();
  const { setNoti } = useNoti();

  const checkUserIsTheSystem = async (authUser) => {
    const isUserInSystem = await isUserInDb(authUser.uid);
    if (isUserInSystem) {
      const userInSystem = await getUserFromDb(authUser.uid);
      setUser(userInSystem);
      authenticateUser();
    } else {
      console.log(authUser);
      setNoti("user not found. sign-up instead.");
    }
  };

  const handleGoogleLoginBtn = async () => {
    const authUser = await googleLogin();
    if (authUser) checkUserIsTheSystem(authUser);
    else setNoti("something went wrong. try different credential", 5);
  };

  const handleFbLoginBtn = async () => {
    const authUser = await fbLogin();
    if (authUser) checkUserIsTheSystem(authUser);
    else setNoti("something went wrong. try different credential", 5);
  };

  const handleEmailLoginBtn = async (email, password) => {
    const authUser = await emailLogin(email, password);
    if (authUser) checkUserIsTheSystem(authUser);
  };

  const handleSignUpLink = () => {
    closeLogIn();
  };

  return (
    <LogInBox
      isAuthenticate={isAuthenticate}
      closeForm={closeLogIn}
      handleGoogleLoginBtn={handleGoogleLoginBtn}
      handleFbLoginBtn={handleFbLoginBtn}
      handleSignUpLink={handleSignUpLink}
      handleEmailLoginBtn={handleEmailLoginBtn}
    />
  );
}

export default LogIn;
