import { IoMoonSharp } from "react-icons/io5";

const NavBarr = ({ darkMode, toggleDarkMode }) => {
  return (
    <section className={darkMode && "dark"}>
      <div className="min-h-20 flex justify-between px-20 shadow-lg dark:bg-d-blue">
        <label className="text-vd-blue-lm content-center text-2xl font-semibold dark:text-white-txt">
          Where in the world?
        </label>
        <button
          className="flex self-center p-2 gap-1 rounded-2xl hover:ease-in-out hover:duration-150 transition duration-200 hover:scale-110"
          onClick={() => toggleDarkMode()}
        >
          <IoMoonSharp className="self-center text-vd-blue-lm text-l dark:text-white-txt" />
          <label className="text-vd-blue-lm content-center text-base font-semibold hover:cursor-pointer dark:text-white-txt">
            Dark Mode
          </label>
        </button>
      </div>
    </section>
  );
};

export default NavBarr;
