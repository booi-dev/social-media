import React from "react";
import TrendingList from "../features/trending/TrendingList";
import SuggestionList from "../features/suggestion/SuggestionList";

function Widget() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <TrendingList />
        <SuggestionList />
      </div>
    </div>
  );
}

export default Widget;
