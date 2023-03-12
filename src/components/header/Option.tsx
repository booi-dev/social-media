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
    isHideOnSmall,
  } = props;

  const handleBtnClick = () => {
    setActive();
    clickHandler?.();
  };

  return (
    <button
      type="button"
      className="flex items-center justify-center gap-4 rounded-full  hover:bg-app-white-3 cursor-pointer p-3 lg:justify-start lg:py-2 lg:px-4 "
      onClick={handleBtnClick}
    >
      {isActive ? (
        <IconActive size={size} className="stroke-1" />
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
  clickHandler: undefined,
  isHideOnSmall: true,
};

export default Option;
