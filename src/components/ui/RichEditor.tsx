import { useState, useRef } from "react";
import sanitizeHtml from "sanitize-html";

function RichEditor() {
  const [content, setContent] = useState(
    "<span class='text-red-500'>heiya</span>"
  );

  // const text = useRef("");

  const handleOnFocus = () => {
    console.log("focusing");
  };

  const handleChange = (e) => {
    const value = e.currentTarget.innerHTML;
    // console.log(value);

    // const sanitizeConfig = {
    //   allowedTags: ["span"],
    //   allowedAttributes: {
    //     span: ["style"],
    //   },
    // };

    setContent(value);

    // setContent(sanitizeHtml(e.currentTarget.innerHTML, sanitizeConfig));
  };

  console.log(content);

  return (
    <ContentEditable
      onFocus={handleOnFocus}
      onChange={handleChange}
      html={content}
      className="bg-red-300 p-2 text-app-font-20"
    />
  );
}

export default RichEditor;
