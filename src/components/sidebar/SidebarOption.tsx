import { IconType } from "react-icons";

type SidebarOptionType = {
  text: string;
  icon: IconType;
  iconActive: IconType;
  isActive: boolean;
  size?: number;
};

function SidebarOption(props: SidebarOptionType) {
  const { icon: Icon, iconActive: IconActive, isActive, text, size } = props;

  console.log(size);

  return (
    <div className="flex items-center justify-center gap-4 rounded-full  hover:bg-app-white-3 cursor-pointer lg:w-full p-3 lg:px-4 lg:justify-start lg:p-2  ">
      {isActive ? <IconActive size={size} /> : <Icon size={size} />}
      <h1 className="hidden lg:block lg:text-app-font-20 "> {text}</h1>
    </div>
  );
}

SidebarOption.defaultProps = {
  size: 25,
};

export default SidebarOption;
