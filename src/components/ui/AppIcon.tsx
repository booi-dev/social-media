import { IconType } from "react-icons";

type IconPropType = {
  icon: IconType;
  text?: string | number;
  size?: number;
  animation?: string;
  rotateDeg?: number;
  hoverColor?: "pri" | "pink" | "green" | "black" | "gray";
  color?: "pri" | "pink" | "green" | "black" | "blue";
};

type colorVariantsType = {
  [key: string]: string;
  pri: string;
  pink: string;
  green: string;
  black: string;
};

function AppIcon(props: IconPropType) {
  const {
    icon: Icon,
    text,
    size,
    rotateDeg,
    hoverColor,
    color,
    animation,
  } = props;

  const colorVariants: colorVariantsType = {
    pri: "text-pri-clr-1",
    pink: "text-pink-600",
    green: "text-green-400",
    black: "text-black",
    gray: "text-app-gray-1",
  };

  const groupHoverColorVariants: colorVariantsType = {
    pri: "group-hover:text-app-white-1",
    pink: "group-hover:text-pink-600",
    green: "group-hover:text-green-400",
    black: "group-hover:text-app-white-3",
    gray: "group-hover:text-app-white-1",
  };

  const hoverColorVariants: colorVariantsType = {
    pri: "hover:bg-pri-clr-1",
    pink: "hover:bg-pink-300",
    green: "hover:bg-green-300",
    black: "hover:bg-app-white-3",
    gray: "hover:bg-app-gray-3",
  };

  return (
    <div
      className={`group flex items-center gap-3 rounded-full p-2 md:p-3 ${
        hoverColor && hoverColorVariants[hoverColor]
      } transition-all duration-700 dark:hover:bg-transparent`}
    >
      <Icon
        size={size}
        className={`
        h-15 w-15 transition-all duration-500
        ${hoverColor && groupHoverColorVariants[hoverColor]} 
        ${color && colorVariants[color]} 
        ${rotateDeg && "rotate-90"}
        ${animation && animation}
        `}
      />
      {text && (
        <span
          className={`
      ${hoverColor && groupHoverColorVariants[hoverColor]} 
      ${color && colorVariants[color]}
      ${+text === 0 && "invisible"}
      `}
        >
          {text.toString()}
        </span>
      )}
    </div>
  );
}

AppIcon.defaultProps = {
  text: "",
  size: 18,
  rotateDeg: 0,
  hoverColor: "",
  color: "",
  animation: "",
};

export default AppIcon;
