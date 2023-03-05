import { IconType } from "react-icons";

type IconPropType = {
  icon: IconType;
  size?: number;
  rotateDeg?: number;
  color?: string;
};

function AppIcon(props: IconPropType) {
  const { icon: Icon, size, rotateDeg, color } = props;

  type colorVariantsType = {
    [key: string]: string;
    blue: string;
    pink: string;
    green: string;
  };

  const colorVariants: colorVariantsType = {
    blue: "group-hover:text-pri-blue-1",
    pink: "group-hover:text-pink-400",
    green: "group-hover:text-green-400",
  };

  const bgColorVariants: colorVariantsType = {
    blue: "hover:bg-blue-100",
    pink: "hover:bg-pink-100",
    green: "hover:bg-green-100",
  };

  return (
    <div
      className={`group rounded-full p-3 ${
        color && bgColorVariants[color]
      } transition-all duration-300`}
    >
      <Icon
        size={size}
        className={`${rotateDeg && "rotate-90"}
        ${
          color && colorVariants[color]
        } h-15 w-15 transition-all  duration-300`}
      />
    </div>
  );
}

AppIcon.defaultProps = {
  size: 20,
  rotateDeg: 0,
  color: "",
};

export default AppIcon;
