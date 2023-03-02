import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [greet, setGreet] = useState<string>("Hello");

  useEffect(() => {
    let name;
    name = "booi";
    name = "haha";
    setGreet(name);
  }, []);

  const conlog = (val: string) => {
    console.log(val);
  };

  conlog("hello there");

  return <div className="App bg-red-500">{greet}, ts, vite, tailwind</div>;
}

export default App;
