import React from "react";
import SearchForm from "../features/search/SearchForm";
import NewsList from "../features/news/NewsList";
import SuggestionList from "../features/suggestion/SuggestionList";

function Widget() {
  return (
    <div className="hidden py-1 mx-4 w-full max-w-[350px] h-screen space-y-4 overflow-y-scroll hide-scrollbar lg:block">
      <div className="sticky top-1 left-0 right-0 bg-white">
        <SearchForm />
      </div>
      <div className="flex flex-col gap-4">
        <NewsList />
        <SuggestionList />
      </div>
    </div>
  );
}

export default Widget;
