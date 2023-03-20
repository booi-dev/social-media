import { IconType } from "react-icons";

type IconPropType = {
  icon: IconType;
  text?: string | number;
  size?: number;
  rotateDeg?: number;
  hoverColor?: "blue" | "pink" | "green" | "black";
  color?: "blue" | "pink" | "green" | "black";
};

type colorVariantsType = {
  [key: string]: string;
  blue: string;
  pink: string;
  green: string;
  black: string;
};

function AppIcon(props: IconPropType) {
  const { icon: Icon, text, size, rotateDeg, hoverColor, color } = props;

  const colorVariants: colorVariantsType = {
    blue: "text-pri-blue-1",
    pink: "text-pink-400",
    green: "text-green-400",
    black: "text-black",
  };

  const groupHoverColorVariants: colorVariantsType = {
    blue: "group-hover:text-pri-blue-1",
    pink: "group-hover:text-pink-400",
    green: "group-hover:text-green-400",
    black: "group-hover:text-bg-app-white-3",
  };

  const hoverColorVariants: colorVariantsType = {
    blue: "hover:bg-blue-100",
    pink: "hover:bg-pink-100",
    green: "hover:bg-green-100",
    black: "hover:bg-app-white-3",
  };

  return (
    <div
      className={`group flex items-center gap-3 p-2 md:p-3 rounded-full ${
        hoverColor && hoverColorVariants[hoverColor]
      } transition-all duration-500 dark:hover:bg-transparent`}
    >
      <Icon
        size={size}
        className={`
        ${hoverColor && groupHoverColorVariants[hoverColor]} 
        ${color && colorVariants[color]} 
        ${rotateDeg && "rotate-90"}
        h-15 w-15 transition-all  duration-300`}
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
};

export default AppIcon;
