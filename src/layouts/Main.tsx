import React from "react";
import Widget from "./Widget";
import Home from "../pages/Home";
// import Notification from "../pages/Notification";

function Main() {
  return (
    <div className="flex w-full gap-4">
      <Home />
      <Widget />
    </div>
  );
}

export default Main;
