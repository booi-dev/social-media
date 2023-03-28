import SideBar from "./Sidebar";
import Home from "../pages/Home";
// import Notification from "../pages/Notification";

function Main() {
  return (
    <div className="flex w-full gap-4 bg-inherit">
      <Home />
      <SideBar />
    </div>
  );
}

export default Main;
