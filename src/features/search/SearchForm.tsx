import { useState } from "react";
import { BiSearch } from "react-icons/bi";

function SearchForm() {
  const [searchValue, setSearchValue] = useState("");

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <form className="flex items-center gap-2 px-3 bg-app-white-2 dark:bg-app-black-3 rounded-3xl">
      <BiSearch size={23} className="text-app-gray-3" />
      <input
        onChange={handlerInputChange}
        value={searchValue}
        placeholder="Search Twitter"
        className="w-full p-2.5 rounded-3xl bg-inherit focus:outline-none"
      />
    </form>
  );
}

export default SearchForm;
