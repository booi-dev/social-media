import React from "react";
import { BsTextRight } from "react-icons/bs";
import AppIcon from "../../../components/ui/AppIcon";

function ViewUI() {
  return (
    <div className="hidden sm:block">
      <AppIcon icon={BsTextRight} rotateDeg={90} hoverColor="blue" />
    </div>
  );
}

export default ViewUI;
