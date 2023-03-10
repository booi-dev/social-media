import SearchForm from "../features/search/SearchForm";
import Widget from "./Widget";
import Footer from "./Footer";

function SideBar() {
  return (
    <div className="hidden py-1 mx-4 w-full max-w-[350px] h-screen space-y-4 overflow-y-scroll hide-scrollbar lg2:block">
      <div className="sticky top-1 left-0 right-0 bg-white">
        <SearchForm />
      </div>
      <Widget />
      <Footer />
    </div>
  );
}

export default SideBar;
