import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";

const useAuth = () => {
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    let user;
    try {
      const res = await signInWithPopup(auth, googleProvider);
      user = res.user;
    } catch (err) {
      console.log(err);
    }
    return user;
  };

  const fbProvider = new FacebookAuthProvider();

  const fbLogin = async () => {
    let user;
    let accessToken;
    try {
      const res = await signInWithPopup(auth, fbProvider);
      user = res.user;
    } catch (err) {
      console.log(err);
    }
    return { user, accessToken };
  };

  return { googleLogin, fbLogin };
};

export default useAuth;
