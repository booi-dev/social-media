import React from "react";

type BackDropPropType = {
  handleClose: () => void;
};

const handleKeyDown = () => {
  console.log("key down");
};

function BackDrop({ handleClose }: BackDropPropType) {
  return (
    <div
      className="fixed inset-0 w-full h-full bg-blue-200 bg-opacity-50 z-10"
      id="backdrop"
      role="button"
      tabIndex={0}
      aria-label="backdrop"
      onKeyDown={handleKeyDown}
      onClick={handleClose}
    />
  );
}

export default BackDrop;
