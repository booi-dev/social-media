import React from "react";

type BackDropPropType = {
  handleClose: () => void;
  color?: string;
};

const handleKeyDown = () => {
  console.log("key down");
};

type colorVariantType = {
  [key: string]: string;
  black: string;
  blue: string;
};
function BackDrop(props: BackDropPropType) {
  const { handleClose, color } = props;

  const colorVariants: colorVariantType = {
    white: "bg-white bg-opacity-40",
    black: "bg-black bg-opacity-40",
    blue: "bg-pri-blue-1 bg-opacity-40",
  };

  return (
    <div
      className={`fixed inset-0 w-full h-full ${
        color && colorVariants[color]
      }  z-10`}
      id="backdrop"
      role="button"
      tabIndex={0}
      aria-label="backdrop"
      onKeyDown={handleKeyDown}
      onClick={handleClose}
    />
  );
}

BackDrop.defaultProps = {
  color: "white",
};

export default BackDrop;
