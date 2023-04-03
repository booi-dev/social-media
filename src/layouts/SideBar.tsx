import useUserControls from "../redux/control/userControls";

import SignUpWidget from "../features/login-signup/signup/SignUpWidget";
import SearchForm from "../features/search/SearchForm";
import Widget from "./Widget";
import Footer from "./Footer";

function SideBar() {
  const { isAuthenticate } = useUserControls();
  return (
    <div className="hide-scrollbar mx-4 hidden h-screen w-full max-w-[350px] space-y-4 overflow-y-scroll bg-inherit pb-1 lg2:block">
      {!isAuthenticate && <SignUpWidget />}
      {isAuthenticate && (
        <div className="sticky top-0 left-0 right-0 bg-inherit pt-1.5 text-inherit ">
          <SearchForm />
        </div>
      )}
      <Widget />
      <Footer />
    </div>
  );
}

export default SideBar;
