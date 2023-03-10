import React from "react";
import NewsList from "../features/news/NewsList";
import SuggestionList from "../features/suggestion/SuggestionList";

function Widget() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <NewsList />
        <SuggestionList />
      </div>
    </div>
  );
}

export default Widget;
