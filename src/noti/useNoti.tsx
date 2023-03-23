import useNotiControls from "./redux/control/useNotiControls";

type PositionType =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

function useNoti() {
  const { openNoti, closeNoti, setProperty } = useNotiControls();

  const setTimeOut = (timeout: number) => {
    setTimeout(() => {
      closeNoti();
    }, timeout * 1000);
  };

  /* eslint-disable default-param-last */
  const setNoti = (text: string, timeout = 3, position?: PositionType) => {
    openNoti();
    const tobeSetData = {
      text,
      timeout,
      position,
    };
    setProperty(tobeSetData);
    setTimeOut(timeout);
  };

  return { setNoti };
}

export default useNoti;
