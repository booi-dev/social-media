import SideBar from "./layouts/SideBar";
import Main from "./layouts/Main";
import Widget from "./layouts/Widget";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen justify-center bg-app-white-1.2">
      <SideBar />
      <Main />
      <Widget />
    </div>
  );
}

export default App;
