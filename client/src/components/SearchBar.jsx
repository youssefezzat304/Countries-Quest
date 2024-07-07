import { IoIosSearch } from 'react-icons/io';

const SearchBar = ({handleSearch}) => {
  return (
    <div className="w-full flex relative">
      <IoIosSearch className="self-center relative left-10 text-2xl text-d-gray-lm dark:text-white-txt" />
      <input
        type="search"
        placeholder="Search for a country"
        className="w-3/12 min-w-[300px] h-12 rounded-md pl-16 text-vd-blue-lm shadow-md dark:bg-d-blue dark:text-white-txt"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar