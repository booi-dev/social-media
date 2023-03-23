import { useAppSelector, useAppDispatch } from "../app/hooks";
import { toggleTheme } from "../slice/theme";

function useThemeControls() {
  const theme = useAppSelector((state) => state.themeStore.theme);
  const dispatch = useAppDispatch();

  const switchTheme = () => {
    dispatch(toggleTheme());
  };

  return { theme, switchTheme };
}

export default useThemeControls;
