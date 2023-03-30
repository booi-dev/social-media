import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import useUserControls from "../redux/control/userControls";

const useAuth = () => {
  const googleAuth = new GoogleAuthProvider();

  const { authenticateUser } = useUserControls();

  const googleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, googleAuth);
      console.log(res.user);
      authenticateUser();
    } catch (err) {
      console.log(err);
    }
  };

  return googleLogin;
};

export default useAuth;
