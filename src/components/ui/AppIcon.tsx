import { IconType } from "react-icons";

type IconPropType = {
  icon: IconType;
  size?: number;
  rotateDeg?: number;
  hoverColor?: string;
  color?: string;
};

type colorVariantsType = {
  [key: string]: string;
  blue: string;
  pink: string;
  green: string;
};

function AppIcon(props: IconPropType) {
  const { icon: Icon, size, rotateDeg, hoverColor, color } = props;

  const colorVariants: colorVariantsType = {
    blue: "text-pri-blue-1",
    pink: "text-pink-400",
    green: "text-green-400",
  };

  const groupHoverColorVariants: colorVariantsType = {
    blue: "group-hover:text-pri-blue-1",
    pink: "group-hover:text-pink-400",
    green: "group-hover:text-green-400",
  };

  const hoverColorVariants: colorVariantsType = {
    blue: "hover:bg-blue-100",
    pink: "hover:bg-pink-100",
    green: "hover:bg-green-100",
  };

  return (
    <div
      className={`group rounded-full p-3 ${
        hoverColor && hoverColorVariants[hoverColor]
      } transition-all duration-500`}
    >
      <Icon
        size={size}
        className={`
        ${hoverColor && groupHoverColorVariants[hoverColor]} 
        ${color && colorVariants[color]} 
        ${rotateDeg && "rotate-90"}
        h-15 w-15 transition-all  duration-300`}
      />
    </div>
  );
}

AppIcon.defaultProps = {
  size: 20,
  rotateDeg: 0,
  hoverColor: "",
  color: "",
};

export default AppIcon;
