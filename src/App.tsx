import Header from "./layouts/Header";
import Main from "./layouts/Main";
import "./App.css";

function App() {
  return (
    <div className="dark">
      <div className="relative flex dark:bg-app-black-1 dark:text-app-white-1.2 ">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
