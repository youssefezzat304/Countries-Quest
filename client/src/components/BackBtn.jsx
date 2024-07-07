import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <div className="basis-1/2 py-14">
      <button
        className="basis-1/2 flex h-fit w-fit text-2xl gap-2 items-center py-2 px-4 shadow-lg rounded-lg transition duration-200 hover:scale-95 dark:bg-d-blue dark:text-white-txt"
        onClick={() => navigate("/")}
      >
        <IoArrowBackCircleOutline />
        <p>Back</p>
      </button>
    </div>
  );
};

export default BackBtn;
