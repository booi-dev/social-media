import { useAppSelector, useAppDispatch } from "../app/hooks";
import { open, close, createProperty } from "../slice/notiSlice";

function useNotiControls() {
  const notis = useAppSelector((state) => state.notiStore);
  const dispatch = useAppDispatch();

  const noti = notis.open;

  const openNoti = () => {
    dispatch(open());
  };

  const closeNoti = () => {
    dispatch(close());
  };

  const setProperty = (properties) => {
    dispatch(createProperty(properties));
  };

  return {
    noti,
    notis,
    openNoti,
    closeNoti,
    setProperty,
  };
}

export default useNotiControls;
