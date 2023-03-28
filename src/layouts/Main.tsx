import SideBar from "./Sidebar";
import Home from "../pages/Home";

function Main() {
  return (
    <div className="flex w-full gap-4 bg-inherit">
      <Home />
      <SideBar />
    </div>
  );
}

export default Main;
