import { IconType } from "react-icons";

type OptionType = {
  text: string;
  icon: IconType;
  iconActive: IconType;
  isActive: boolean;
  setActive: () => void;
  clickHandler?: () => void;
  size?: number;
  isHideOnSmall?: boolean;
  extraStyle?: string;
};

function Option(props: OptionType) {
  const {
    text,
    icon: Icon,
    iconActive: IconActive,
    isActive,
    setActive,
    clickHandler,
    size,
    extraStyle,
    isHideOnSmall,
  } = props;

  const handleBtnClick = () => {
    setActive();
    clickHandler?.();
  };

  return (
    <button
      type="button"
      className="flex cursor-pointer items-center justify-center gap-4  rounded-sm p-3 hover:bg-app-white-3 dark:hover:bg-app-black-3 lg:justify-start lg:py-2 lg:px-4 "
      onClick={handleBtnClick}
    >
      {isActive ? (
        <IconActive size={size} className={extraStyle} />
      ) : (
        <Icon size={size} />
      )}
      <h1
        className={` ${isHideOnSmall && "hidden"} ${
          isActive && "font-bold"
        } lg:block lg:text-app-font-20`}
      >
        {text}
      </h1>
    </button>
  );
}

Option.defaultProps = {
  size: 25,
  extraStyle: "",
  clickHandler: undefined,
  isHideOnSmall: true,
};

export default Option;
