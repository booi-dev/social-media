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
    blue: "hover:text-pri-blue-1",
    pink: "hover:text-[#db2777]",
    green: "hover:text-green-400",
  };

  return (
    <div className="rounded-full bg-gray-500 p-2">
      <Icon
        size={size}
        className={`rotate-${rotateDeg} ${color && colorVariants[color]}`}
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
