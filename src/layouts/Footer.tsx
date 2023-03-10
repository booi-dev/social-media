import React from "react";
import { RiCopyrightLine } from "react-icons/ri";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="flex gap-2 flex-wrap [&>button]:text-app-font-14 [&>button]:text-app-gray-3 leading-3">
        <button type="button">Terms of Service</button>
        <button type="button">Privacy Policy</button>
        <button type="button">Cookie Policy</button>
        <button type="button">Accessibility</button>
        <button type="button">Ads info </button>
        <button type="button">More ...</button>
      </div>
      <h1 className=" flex items-center py-2 text-app-gray-3">
        <RiCopyrightLine className="translate-y-[1px]" /> {year} Twitter, Inc.
      </h1>
    </div>
  );
}

export default Footer;
