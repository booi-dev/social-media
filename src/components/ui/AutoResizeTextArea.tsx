import { useRef } from "react";

type AutoResizeTextAreaType = {
  maxLength: number;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
};

function AutoResizeTextArea(props: AutoResizeTextAreaType) {
  const { maxLength, placeholder, onChange, value } = props;

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const resizeArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };

  return (
    <textarea
      ref={textAreaRef}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      onChange={resizeArea}
      className="w-full text-app-font-20 font-normal text-app-black-3 focus:outline-none resize-none hide-scrollbar"
    />
  );
}

export default AutoResizeTextArea;
