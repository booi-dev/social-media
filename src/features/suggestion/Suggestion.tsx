import React from "react";

type SuggestionType = {
  id: number;
  displayName: string;
  displayPic: string;
  userName: string;
};

type SuggestionPropType = {
  suggestion: SuggestionType;
};

function Suggestion({ suggestion }: SuggestionPropType) {
  return (
    <div className="flex py-2 px-4 justify-between items-center gap-2">
      <div className="flex items-center gap-2">
        <img
          src={suggestion.displayPic}
          alt=""
          className="w-14 h-14 object-cover rounded-full"
        />
        <div>
          <h1 className="text-app-font-17 font-bold">
            {" "}
            {suggestion.displayName}{" "}
          </h1>
          <h2 className="text-app-gray-3"> {`@${suggestion.userName}`} </h2>
        </div>
      </div>
      <button
        type="button"
        className="py-2 px-5 bg-app-black-1 text-white font-bold rounded-full"
      >
        Follow
      </button>
    </div>
  );
}

export default Suggestion;
