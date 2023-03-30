import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
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

  const signAuthOut = async () => {
    try {
      await signOut(auth);
      console.log("signAuthOut");
    } catch (e) {
      console.log(e);
    }
  };

  return { googleLogin, fbLogin, signAuthOut };
};

export default useAuth;
