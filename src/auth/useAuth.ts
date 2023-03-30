import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";

const useAuth = () => {
  // const { setNoti } = useNoti();

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
    try {
      const res = await signInWithPopup(auth, fbProvider);
      user = res.user;
    } catch (e) {
      console.log(e);
    }
    return user;
  };

  return { googleLogin, fbLogin };
};

export default useAuth;
