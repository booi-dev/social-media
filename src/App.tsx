import SideBar from "./layouts/SideBar";
import Main from "./layouts/Main";
import "./App.css";

function App() {
  return (
    <div className="relative flex">
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
