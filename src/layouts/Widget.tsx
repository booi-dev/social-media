import React from "react";
import SearchForm from "../features/search/SearchForm";
import News from "../features/news/News";

function Widget() {
  return (
    <div className="hidden py-1 lg:block mx-4 w-full max-w-[350px] space-y-4">
      <SearchForm />
      <News />
    </div>
  );
}

export default Widget;
