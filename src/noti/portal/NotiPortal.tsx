import { createPortal } from "react-dom";
import useNotiControls from "../redux/control/useNotiControls";

function NotiPortal() {
  const { notis } = useNotiControls();
  const { open, text, position } = notis;

  const portal = document.getElementById("portal");
  portal?.classList.add("relative");

  let notificationPosition = "top-6 left-1/2 -translate-x-1/2";

  if (position === "top-left") notificationPosition = "top-6 left-6";
  if (position === "top-center")
    notificationPosition = "top-6 left-1/2 -translate-x-1/2";
  if (position === "top-right") notificationPosition = "top-6 righ-6";
  if (position === "bottom-left") notificationPosition = "bottom-6 left-6";
  if (position === "bottom-center")
    notificationPosition = "bottom-6 left-1/2 -translate-x-1/2";
  if (position === "bottom-right") notificationPosition = "bottom-6 right-6";

  let notificationPortal: React.ReactPortal | React.ReactElement = <div />;

  if (portal) {
    notificationPortal = createPortal(
      <div
        className={`fixed text-white py-2 px-4 rounded-md bg-pri-blue-1 z-20 translate-x-1/2 ${notificationPosition}`}
      >
        {text}
      </div>,
      portal
    );
  }

  if (!open) return null;

  return <div>{notificationPortal}</div>;
}

NotiPortal.defaultProps = {
  position: "top-center",
};

export default NotiPortal;