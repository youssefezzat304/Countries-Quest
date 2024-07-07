import { IoIosArrowDown } from "react-icons/io";

const SelectMenu = () => {
  return (
    <div className="flex">
      <select
        name="region-menu"
        id=""
        className="text-vd-blue-lm w-52 px-3 rounded-md shadow-md appearance-none cursor-pointer  dark:bg-d-blue dark:text-white-txt hidden md:block"
      >
        <option value="1">Filter by region</option>
        <option value="2">Africa</option>
        <option value="3">America</option>
        <option value="4">Aisa</option>
        <option value="4">Europe</option>
        <option value="4">Oceania</option>
      </select>
      <IoIosArrowDown className="relative right-8 self-center text-xl cursor-pointer dark:text-white-txt hidden md:block" />
    </div>
  );
}

export default SelectMenu