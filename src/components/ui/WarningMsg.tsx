import BackDrop from "./BackDrop";

type WarningMsgType = {
  warningText: string;
  warningDesc: string;
  warningBtn: string;
  warningBtnClr?: string;
  handleConfirm: () => void;
  handleWarningClose: () => void;
};

function WarningMsg(props: WarningMsgType) {
  //   const handleCance = () => {};
  const {
    warningText,
    warningDesc,
    warningBtn,
    warningBtnClr,
    handleConfirm,
    handleWarningClose,
  } = props;

  const handleConfirmBtn = () => {
    handleConfirm();
    handleWarningClose();
  };

  let btnBgClr = "bg-red-500 hover:bg-red-600 focus:bg-red-400";
  if (warningBtnClr === "white")
    btnBgClr = "bg-app-white-1 hover:bg-app-white-2 focus:bg-app-white-3";

  return (
    <>
      <div className="fixed top-1/2 left-1/2 z-20 h-auto w-full -translate-x-2/4 -translate-y-1/2 rounded-sm bg-inherit p-8 text-inherit shadow-lg sm:w-[380px]">
        <h1 className="text-app-font-20 font-bold"> {warningText}</h1>
        <p className="py-2 text-app-font-15 leading-4 text-inherit">
          {warningDesc}
        </p>
        <div className="mt-4 [&>button]:block [&>button]:w-full [&>button]:rounded-md [&>button]:p-2  [&>button]:font-bold [&>button]:transition-all [&>button]:duration-500">
          <button
            type="button"
            className={`${btnBgClr} text-app-black-1`}
            onClick={handleConfirmBtn}
          >
            {warningBtn}
          </button>
          <button
            type="button"
            className="mt-2 border-[1px] border-app-gray-3 border-opacity-40 hover:bg-app-white-3 hover:text-app-black-1 focus:bg-app-white-4"
            onClick={handleWarningClose}
          >
            Cancel
          </button>
        </div>
      </div>
      <BackDrop handleClose={handleWarningClose} color="blue" />
    </>
  );
}
WarningMsg.defaultProps = {
  warningBtnClr: "red",
};

export default WarningMsg;
