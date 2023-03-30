import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

const useAuth = () => {
  const googleAuth = new GoogleAuthProvider();

  const googleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, googleAuth);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return googleLogin;
};

export default useAuth;
