import { IconType } from "react-icons";

type OptionType = {
  text: string;
  icon: IconType;
  iconActive: IconType;
  isActive: boolean;
  setActive: () => void;
  size?: number;
};

function Option(props: OptionType) {
  const {
    icon: Icon,
    iconActive: IconActive,
    isActive,
    setActive,
    text,
    size,
  } = props;

  return (
    <button
      type="button"
      className="flex items-center justify-center gap-4 rounded-full  hover:bg-app-white-3 cursor-pointer p-3 lg:px-4 lg:justify-start lg:p-2"
      onClick={setActive}
    >
      {isActive ? (
        <IconActive size={size} className="stroke-1" />
      ) : (
        <Icon size={size} />
      )}
      <h1
        className={`hidden ${
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
};

export default Option;
