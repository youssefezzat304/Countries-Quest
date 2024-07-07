const ViewMoreBtn = ({viewMore}) => {
  return (
    <div className="flex justify-center pt-10">
      <button
        type="button"
        className="flex items-center rounded-full border-2 border-gray-300 bg-secondary-50 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:bg-d-gray-lm hover:text-white-txt dark:text-white-txt"
        onClick={() => viewMore()}
      >
        View More
      </button>
    </div>
  );
};

export default ViewMoreBtn;
