import { useState } from "react";
import { BiSearch } from "react-icons/bi";

function SearchForm() {
  const [searchValue, setSearchValue] = useState("");

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <form className="flex items-center gap-2 rounded-sm bg-app-white-2 px-3 dark:bg-app-black-3">
      <BiSearch size={23} className="text-app-gray-3" />
      <input
        onChange={handlerInputChange}
        value={searchValue}
        placeholder="Search Twitter"
        className="w-full rounded-sm bg-inherit p-2.5 focus:outline-none"
      />
    </form>
  );
}

export default SearchForm;
