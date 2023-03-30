import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

const useAuth = () => {
  const googleAuth = new GoogleAuthProvider();

  const googleLogin = async () => {
    let user;
    try {
      const res = await signInWithPopup(auth, googleAuth);
      user = res.user;
    } catch (err) {
      console.log(err);
    }
    return user;
  };

  return googleLogin;
};

export default useAuth;
