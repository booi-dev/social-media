import { useAppSelector, useAppDispatch } from "../app/hooks";
import { UserType, createUser, updateName } from "../slice/user";

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
