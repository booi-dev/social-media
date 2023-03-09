import React from "react";
import SearchForm from "../features/search/SearchForm";
import NewsList from "../features/news/NewsList";
import Suggestion from "../features/suggestion/Suggestion";

function Widget() {
  return (
    <div className="hidden py-1 lg:block mx-4 w-full max-w-[350px] space-y-4">
      <div className="sticky top-1 left-0 right-0 bg-white">
        <SearchForm />
      </div>
      <NewsList />
      <Suggestion />
    </div>
  );
}

export default Widget;
