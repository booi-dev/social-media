import { useAppSelector, useAppDispatch } from "../app/hooks";
import { createUser, updateName } from "../slice/user";
import { UserType } from "../../types";

function useUserControls() {
  const user = useAppSelector((state) => state.userStore);
  const dispatch = useAppDispatch();

  const setUser = (u: UserType) => {
    dispatch(createUser(u));
  };

  const changeName = (newName: string) => {
    dispatch(updateName(newName));
  };

  return { user, setUser, changeName };
}

export default useUserControls;
