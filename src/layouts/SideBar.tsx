import useUserControls from "../redux/control/userControls";

import LogInForm from "../components/ui/LogInWidget";
import SearchForm from "../features/search/SearchForm";
import Widget from "./Widget";
import Footer from "./Footer";

function SideBar() {
  const { isAuthenticate } = useUserControls();
  return (
    <div className="hidden pb-1 mx-4 w-full max-w-[350px] h-screen space-y-4 overflow-y-scroll hide-scrollbar bg-inherit lg2:block">
      {!isAuthenticate && <LogInForm />}
      {isAuthenticate && (
        <div className="sticky top-0 left-0 right-0 bg-inherit text-inherit pt-1.5 ">
          <SearchForm />
        </div>
      )}
      <Widget />
      <Footer />
    </div>
  );
}

export default SideBar;
