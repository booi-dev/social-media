import { useAppSelector, useAppDispatch } from "../app/hooks";
import { createUser, updateName, authenticate } from "../slice/user";
import { UserType } from "../../types";

function useUserControls() {
  const userStore = useAppSelector((state) => state.userStore);
  const dispatch = useAppDispatch();

  const { isAuthenticate, user } = userStore;

  const userId = user.uid;

  const setUser = (u: UserType) => {
    dispatch(createUser(u));
  };

  const changeName = (newName: string) => {
    dispatch(updateName(newName));
  };

  const authenticateUser = () => {
    dispatch(authenticate(true));
  };

  const removeUser = () => {
    dispatch(authenticate(false));
  };

  return {
    isAuthenticate,
    user,
    userId,
    setUser,
    changeName,
    authenticateUser,
    removeUser,
  };
}

export default useUserControls;
